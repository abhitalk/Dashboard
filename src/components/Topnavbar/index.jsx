import React from 'react';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';
import "./index.css";
import {MdDashboard} from 'react-icons/md';
import {FaSearch,FaGripHorizontal} from 'react-icons/fa';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {GoArrowSmallDown} from 'react-icons/go';
import moment from 'moment'
import Moment from 'react-moment';


export default function index() {
    const currentDateTime = moment();
   
    return (
        <div className="top-parent">
            <div className="first-child">
                <div className="logo-parent">
                <h3>DigiCollect</h3>
             <img src={logo} alt="image"/>
             </div>
            </div>
            <div className="second-child">
                <div className="hrms">
                <MdDashboard />
                <h3>DigiHRMS</h3>
                </div>

            </div>
            <div className="third-child">
            <div className="ISP"><h5>ISP</h5></div>
            <div className="icon-container">
                <FaSearch />
                <IoIosNotificationsOutline />
                <FaGripHorizontal />
            </div>
            <div className="timer">
                 <Moment format='h:mm:ss a'>{currentDateTime}</Moment>
            </div>
            <div className="profile-owner">
            <img src={profile} alt="image"/>
            <h4>Johan Deo</h4>
            <GoArrowSmallDown/>
            </div>
        </div>
        </div>
    );
    }