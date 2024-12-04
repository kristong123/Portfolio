import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { fetchData } from '@utils/api';

// Define types for the GitHub API response
type ContributionDay = {
  contributionCount: number;
  date: string;
  color: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

type GitHubResponse = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: ContributionCalendar;
      };
    };
  };
};

const GithubContributions = () => {
  const [data, setData] = useState<ContributionCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getContributions = async () => {
      try {
        const response = await fetchData<GitHubResponse>('/api/github-contributions');
        const calendar = response.data.user.contributionsCollection.contributionCalendar;
        setData(calendar);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    getContributions();
  }, []);

  const getColor = (count: number): string => {
    if (count === 0) return 'bg-dark1';
    if (count <= 3) return 'bg-dark2';
    if (count <= 6) return 'bg-light1';
    return 'bg-light2';
  };

  return (
    <section className="section" id="contributions">
      <div>
        <h1>GitHub Activity</h1>
      </div>
      <div className={clsx('bubble', 'w-full md:w-[80%]', 'p-6')}>
        {loading && (
          <div className="animate-pulse bg-dark1 h-32 rounded" />
        )}
        
        {error && (
          <p className="text-red-500">Failed to load GitHub contributions</p>
        )}
        
        {data && (
          <div className="flex flex-col gap-4">
            <p className="text-lg">
              {data.totalContributions} contributions in the last year
            </p>
            <div className="grid grid-cols-52 gap-1">
              {data.weeks.flatMap(week =>
                week.contributionDays.map(day => (
                  <div
                    key={day.date}
                    className={clsx(
                      'w-3 h-3 rounded-sm',
                      getColor(day.contributionCount)
                    )}
                    title={`${day.contributionCount} contributions on ${day.date}`}
                  />
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubContributions;