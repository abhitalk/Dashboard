import {MdDashboard, MdOutlinePolicy} from 'react-icons/md'
import {GiCompanionCube, GiThrustBend} from 'react-icons/gi';
import {FaUserAlt, FaMoneyBillAlt,FaGripHorizontal} from 'react-icons/fa';
import {GiPortal} from 'react-icons/gi';
import {GrAnalytics} from 'react-icons/gr';
import {FiSettings} from 'react-icons/fi'


const NAV_LINKS = [
  {
    name: "Dashboard",
    icon: <MdDashboard />
  },
  {
    name: "Company Info",
    icon: <GiCompanionCube />
  },
  {
    name: "Employee Info",
    icon: <FaUserAlt />
  },
  {
    name: "Job Portal",
    icon: <GiPortal />
  },
  {
    name: "Attendance",
    icon: <FaUserAlt />
  },
  {
    name: "Payroll",
    icon: <FaMoneyBillAlt />
  },
  {
    name: "Benifits",
    icon: <GiThrustBend />
  },
  {
    name: "Polices",
    icon: <MdOutlinePolicy />
  },
  {
    name: "Analytics",
    icon: <FaGripHorizontal />
  },
  {
    name: "Settings",
    icon: <FiSettings />
  }
];

export default NAV_LINKS;
