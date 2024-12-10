import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { fetchData } from '@utils/api';

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

type GitHubResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: ContributionCalendar;
      };
    };
  };
  errors?: Array<{ message: string }>;
};

const GithubContributions = () => {
  const [data, setData] = useState<ContributionCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getContributions = async () => {
      try {
        const response = await fetchData<GitHubResponse>('/api/github-contributions');
        if (response.errors) {
          throw new Error(response.errors[0].message);
        }

        const calendar = response.data?.user?.contributionsCollection?.contributionCalendar;
        if (!calendar) {
          throw new Error('No contribution data found');
        }

        setData(calendar);
      } catch (err) {
        console.error('Error fetching contributions:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    getContributions();
  }, []);

  const getColor = (count: number): string => {
    if (count === 0) return 'bg-[#161b22]';
    if (count <= 3) return 'bg-[#0e4429]';
    if (count <= 6) return 'bg-[#006d32]';
    if (count <= 9) return 'bg-[#26a641]';
    return 'bg-[#39d353]';
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Mon', 'Wed', 'Fri'];

  if (loading) {
    return (
      <div className={clsx(
        // Base styles
        'bubble',
        // Layout
        'w-fit',
        // Spacing
        'p-6'
      )}>
        <div className={clsx(
          // Animation
          'animate-pulse',
          // Base styles
          'bg-dark1',
          // Sizing
          'h-32',
          // Visual
          'rounded'
        )}/>
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx(
        // Base styles
        'bubble',
        // Layout
        'w-fit',
        // Spacing
        'p-6',
        // Background
        'bg-[#0d1117]'
      )}>
        <p className="text-red-500">Failed to load GitHub contributions: {error}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className={clsx(
      // Base styles
      'bubble',
      // Layout
      'w-fit',
      // Spacing
      'p-6',
    )}>
      <div className={clsx(
        // Layout
        'flex flex-col',
        // Spacing
        'gap-4'
      )}>
        <p className={clsx(
          // Typography
          'text-lg text-gray-200'
        )}>
          {data.totalContributions} contributions in the last year
        </p>
        
        <div className="relative">
          {/* Month labels */}
          <div className={clsx(
            // Layout
            'flex justify-between',
            // Typography
            'text-xs text-gray-400 text-shadow-DEFAULT',
            // Spacing
            'mb-2 ml-8'
          )}>
            {months.map(month => (
              <span key={month}>{month}</span>
            ))}
          </div>
          
          {/* Day labels and contribution grid container */}
          <div className={clsx(
            // Base styles
            'bubble',
            // Layout
            'flex',
            // Spacing
            'p-3 gap-2',
            // Visual
            'bg-dark2'
          )}>
            {/* Day labels */}
            <div className={clsx(
              // Layout
              'flex flex-col justify-between',
              // Typography
              'text-xs text-gray-400',
              // Spacing
              'py-2',
              // Sizing
              'h-[112px]'  // Matches 7 squares + 6 gaps
            )}>
              {days.map(day => (
                <span key={day}>{day}</span>
              ))}
            </div>

            {/* Contribution grid */}
            <div className={clsx(
              // Layout
              'grid',
              'grid-flow-col',
              'grid-rows-7',
              // Spacing
              'gap-1'
            )}>
              {data.weeks.map((week, weekIndex) => (
                <React.Fragment key={weekIndex}>
                  {week.contributionDays.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={clsx(
                        // Sizing
                        'w-3 h-3',
                        // Visual
                        'rounded-sm',
                        getColor(day.contributionCount),
                        // Interactive
                        'transition-colors duration-200',
                        'hover:ring-1 hover:ring-gray-400'
                      )}
                      title={`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`}
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Legend */}
          <div className={clsx(
            // Layout
            'flex items-center',
            // Spacing
            'gap-2 mt-4 ml-8',
            // Typography
            'text-xs text-gray-400'
          )}>
            <span className="text-shadow-DEFAULT">Less</span>
            {[
              'bg-[#161b22]',
              'bg-[#0e4429]',
              'bg-[#006d32]',
              'bg-[#26a641]',
              'bg-[#39d353]'
            ].map((color, index) => (
              <div
                key={index}
                className={clsx(
                  // Sizing
                  'w-3 h-3',
                  // Visual
                  'rounded-sm shadow',
                  color
                )}
              />
            ))}
            <span className="text-shadow-DEFAULT">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubContributions;