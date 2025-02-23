import React, { useEffect, useRef } from 'react'
import Menu from './Components/MenuTab/Menu'
import Content from './Components/ContentTab/Content'
import './App.css'
import { useState } from 'react'


const App = () => {
  const menuRef = useRef(null);
  const contentRef = useRef(null);
  const menuItems = ['About', 'Skills', 'Experience', 'Education', 'Awards', 'Contact'];
  const [activeItem, setActiveItem] = useState('');
  const [isSmallScreen, setSmallScreen] = useState(false);
  useEffect(
    ()=>{
      const target = document.getElementById(activeItem);
      if(target)
        target.scrollIntoView({behavior:"smooth"});
    },
    [activeItem]
  );

  useEffect (()=>{
    const scrollableContainer = contentRef.current;
    const menuTab = menuRef.current;
    const sections = scrollableContainer.querySelectorAll('section');
    let currentTab = "";
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 768);
    };
    const highlightMenu = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - scrollableContainer.scrollTop;
        const sectionHeight = section.offsetHeight;
        if(sectionTop < scrollableContainer.clientHeight/2 && sectionTop+sectionHeight>scrollableContainer.clientHeight/2){
          currentTab = section.getAttribute("id");
        }
      });
      const menuList = menuTab.querySelectorAll('li');
      menuList.forEach((listItem)=>{
      listItem.textContent===currentTab?listItem.classList.add("active"):listItem.classList.remove("active");
      })
      setActiveItem("");
    }
    scrollableContainer.addEventListener('scroll',highlightMenu);
    window.addEventListener("resize",handleResize);
    return ()=>{scrollableContainer.removeEventListener('scroll',highlightMenu); window.removeEventListener('resize',handleResize)}
  },[])


  return (
    <div id='ApplicationContainer'>
       <Menu 
        ref={menuRef}
        menuItems={menuItems} 
        setActiveItem={setActiveItem}
        isSmallScreen = {isSmallScreen}
      />
      <Content ref={contentRef} setActiveItem={setActiveItem}/>
    </div>
    
  )
}

export default App