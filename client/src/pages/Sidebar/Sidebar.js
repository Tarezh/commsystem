// Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css';
import ComposeModal from './ComposeModal';
import MailListComponent from '../MailList/MailListComponent';

const Sidebar = (props) => {
  const [isComposeModalOpen, setComposeModalOpen] = useState(false);

  const openComposeModal = () => {
    setComposeModalOpen(true);
  };

  const closeComposeModal = () => {
    setComposeModalOpen(false);
  };

  const displaysentemails = ()=>
  {
    <MailListComponent/>
  }

  const displayinbox = ()=>
  {
    <MailListComponent/>
  }

  
  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={openComposeModal}>Compose</button>
      <button className="sidebar-button" onClick={displayinbox}>Inbox</button>
      <button className="sidebar-button" onClick={displaysentemails}>Sent</button>

      {/* Use the ComposeModal component */}
      <ComposeModal
        isOpen={isComposeModalOpen}
        onRequestClose={closeComposeModal}
        user = {props.user}
      />
    </div>
  );
}

export default Sidebar;
