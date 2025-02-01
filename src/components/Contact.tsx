import React from 'react';
import clsx from 'clsx';
import gmailIcon from '@images/gmail.png';
import linkedinIcon from '@images/linkedin.png';

const Contact: React.FC = () => {
  const contacts = [
    {
      img: gmailIcon,
      description: 'kristtong123@gmail.com',
    },
    {
      img: linkedinIcon,
      description: 'Connect with me on LinkedIn!',
      link: 'https://www.linkedin.com/in/kristtong', // Ensure the link includes "https://"
    },
  ];

  return (
    <section
      className={clsx(
        // Base styles
        'section'
      )}
      id='contact'
    >
      <div>
        <h1>Contact</h1>
      </div>
      <div
        className={clsx(
          // Layout
          'row flex-wrap'
        )}
      >
        {contacts.map((contact, index) => {
          // Conditionally wrap the div in an <a> tag if a link exists
          const content = (
            <div
              key={index}
              className={clsx(
                // Base styles
                'bg-dark1 rounded shadow',
                // Layout
                'row w-fit h-fit items-center',
                // Spacing
                'p-4',
                // Margins
                'm-1',
                // Cursor
                contact.link ? 'cursor-pointer' : '' // Add pointer cursor if link exists
              )}
            >
              <img
                src={contact.img}
                alt='Paul G. Allen School of Computer Science'
                className={clsx(
                  // Dimensions
                  'w-10 h-10',
                  // Effects
                  'shadow'
                )}
              />
              <p
                className={clsx(
                  // Effects
                  'text-shadow',
                  // Spacing
                  'ml-2'
                )}
              >
                {contact.description}
              </p>
            </div>
          );

          return contact.link ? (
            <a
              key={index}
              href={contact.link}
              target='_blank' // Open link in a new tab
              rel='noopener noreferrer' // Security best practice for target="_blank"
              style={{ textDecoration: 'none', color: 'inherit' }} // Remove underline and inherit text color
            >
              {content}
            </a>
          ) : (
            content
          );
        })}
      </div>
    </section>
  );
};

export default Contact;