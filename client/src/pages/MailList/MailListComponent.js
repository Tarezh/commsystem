// MailListComponent.js

import React, { useState, useEffect } from 'react';
import './MailListComponent.css'; // Import your CSS file for styling
import axios from 'axios';

const MailListComponent = ({receive}) => {
  const [sentMails, setSentMails] = useState([]);

  useEffect(() => {
    const fetchSentMails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/sent-emails`); // Fetch sent emails
        setSentMails(response.data);
      } catch (error) {
        console.error('Error fetching sent emails:', error);
      }
    };

    // Fetch sent emails when the component mounts
    fetchSentMails();
  }, []);

  return (
    <div className="mail-list-container">
      <h2>{receive.value}</h2>
      <ul className="mail-list">
        {sentMails.map((mail, index) => (
          <li key={index} className="mail-item">
            <div className="recipient">{`To: ${mail.recipient}`}</div>
            <div className="subject">{mail.subject}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailListComponent;
