import React from 'react';
import {SiHelpdesk} from 'react-icons/si';
import {FaHome, FaSearch} from 'react-icons/fa';
import {FiMessageSquare} from 'react-icons/fi';
import './index.css';

export default function Footer() {
  return (
  <footer className="footer-container">
    <div className="button-container">
    <button className="helpdesk"><SiHelpdesk />HelpDesk</button>
    <div className="icons-container">
      <FaHome />
      <FaSearch />
      <FiMessageSquare />

          </div>
    </div>
    
    <h3 className="copyright">Copyright 2014-2021 DigiCollect - All Right Reserved</h3>

  </footer>
  );
};


