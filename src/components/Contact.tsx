import React from 'react';
import clsx from 'clsx';
import gmailIcon from '@images/gmail.png';
import linkedinIcon from '@images/linkedin.png';

const Contact: React.FC = () => {
  const contacts = [
    {
      img: gmailIcon,
      description: 'Feel free to reach out to me at kristtong123@gmail.com',
    },
    {
      img: linkedinIcon,
      description: 'Connect with me on LinkedIn!',
      link: 'www.linkedin.com/in/kristtong'
    }
  ]

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
      <div className={clsx(
        // Layout 
        'row flex-wrap'
      )}>
        {contacts.map((contact, index) => (
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
              'm-1'
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
        ))}
      </div>
    </section>
  );
};

export default Contact;