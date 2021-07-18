import React, {useState} from 'react'; 
import '../App.css';
import { RiUser3Line } from 'react-icons/ri'
import { CgGym } from 'react-icons/cg'
import { FaWrench } from 'react-icons/fa'
import { GrLogout } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { AmplifySignOut } from '@aws-amplify/ui-react';


function Sidebar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return <div className="Sidebar">
    {SidebarData.map((item, index) => {
      return (
        <div key={index} className={item.cName}>
          <Link to={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </div>
      )
    })}
    <div className="navButton">
      <GrLogout className="navIcon" size='42px'/>
      Logout
    </div>
    <AmplifySignOut />
  </div>
}


export default Sidebar