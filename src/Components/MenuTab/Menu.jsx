import React, {useState } from 'react'
import './Menu.css'

const Menu = React.forwardRef(({ menuItems, setActiveItem, isSmallScreen }, ref) => {
  const [showMenuTab, setShowMenuTab] = useState(true);
  return (
    <>
      <i className={showMenuTab?"fa-solid fa-x menubar":"fa-solid fa-bars menubar"} title={showMenuTab?"Close Menu":"Show Menu"} onClick={()=>{setShowMenuTab(!showMenuTab)}}></i>
      <div id='MenuTab' ref={ref} className={showMenuTab?"":"hide"}>
        <div className="myProfile">
          <img src='assets/profile_pic.jpeg' alt='profile pic' width='50%' height='50%' />
        </div>
        <div className="menu-list">
          <ul>
            {
              menuItems.map((item, index) =>
                <li key={index} className={(index === 0) ? "active" : ""} onClick={() => { setActiveItem(item) }}>
                  {item}
                </li>
              )
            }
          </ul>
        </div>
      </div>
      </>
  )
});

export default Menu