import React from 'react'
import './Menu.css'

const Menu = React.forwardRef(({menuItems, setActiveItem},ref) => {
  
  return (
    <div id='MenuTab' ref={ref}>
      <div className="myProfile">
        <img src='assets/profile_pic.jpeg' alt='profile pic' width='50%' height='50%'/>
      </div>
      <div className="menu-list">
        <ul>
          {
            menuItems.map((item, index) =>
              <li key={index} className={(index===0)?"active":""} onClick={()=>{setActiveItem(item)}}>
                {item}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
});

export default Menu