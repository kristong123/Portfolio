import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import fetch from 'node-fetch'; // or use axios

// Get the equivalent of __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// API route for GitHub contributions
app.get('/api/github-contributions', async (req, res) => {
  try {
    const query = `
      query {
        user(login: "kristong123") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query })
    });

    const data = await response.json();

    // Log the full response for debugging
    console.log('GitHub API Response:', JSON.stringify(data, null, 2));

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    res.status(500).json({ error: error.message });
  }
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});