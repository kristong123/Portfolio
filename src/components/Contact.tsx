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
        'flex flex-row flex-wrap',
        // Spacing
        'mr-[2vh]',
      )}>
        {contacts.map((contact, index) => (
          <div 
            key={index}
            className={clsx(
              // Base styles
              'bg-dark1 rounded shadow',
              // Layout
              'w-fit h-[15vh]',
              // Spacing  
              'p-[3vh]',
              // Margins
              'm-[1vh]'
            )}
          >
            <img 
              src={contact.img} 
              alt='Paul G. Allen School of Computer Science'
              className={clsx(
                // Dimensions
                'w-[8vh] h-[8vh]',
                // Effects
                'shadow'
              )}
            />
            <p 
              className={clsx(
                // Typography
                'text-[2.5vh]',
                // Effects
                'text-shadow'
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