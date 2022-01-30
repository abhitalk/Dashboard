import "./index.css";
import { useEffect, useState } from "react";
import APIS from "./../../apis";
import User from "./../User";
import {FaRegUser, FaEdit, FaFilter, FaGripHorizontal} from 'react-icons/fa';
import {MdOutlineCreateNewFolder} from 'react-icons/md';
import {RiBarChartHorizontalLine} from 'react-icons/ri';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    APIS.getUsers(setUsers);
  }, []);
  return (
    <div className="profile-container">
      <div className="profile-filter">
        <button className="profile-btn">Profile</button>
        <div className="profile-content">
        <div className="profile-edit">
        <FaRegUser />|
        <FaEdit />
        </div>
        <div>
          <button className="filter">
           <FaFilter /> Filter
          </button>
        </div>
        <div className="create-new">
          <button><MdOutlineCreateNewFolder />Create New</button>
        </div>
        <div className="right-corner-icons">
          <RiBarChartHorizontalLine /> | <FaGripHorizontal />

        </div>
        </div>
        
      </div>
       <div className="dashboard-container">
      <div className="dashboard-users">
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    </div>
    </div>
   
  );
}
