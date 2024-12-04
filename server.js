import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/github-contributions', async (req, res) => {
    try {
        const query = `
      query {
        user(login: "kristtong123") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
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
        res.json(data);
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        res.status(500).send('Error fetching GitHub contributions');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});