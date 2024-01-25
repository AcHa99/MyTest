import React, { useState } from 'react'
import { SidebarData } from './SidebarData'
import './Sidebar.css'

function Sidebar() {
  const [collapsedMenu, setCollapsedMenu] = useState(Array(SidebarData.length).fill(true))

  const toggleSubMenu = (index) => {
    const newCollapsedMenu = [...collapsedMenu]
    newCollapsedMenu[index] = !newCollapsedMenu[index]
    setCollapsedMenu(newCollapsedMenu)
  }

  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        <h3 className='SystemName'> Flex Flow </h3>
        {SidebarData.map((parentItem, parentIndex) => (
          <li key={parentIndex} className='row' onClick={() => parentItem.subItems && toggleSubMenu(parentIndex)}>
            <div className='row' id={window.location.pathname === parentItem.link ? 'active' : ''}>
              <div id='icon'>{parentItem.icon}</div>
              <div id='title'>{parentItem.title}</div>
              {parentItem.subItems && (
                <div id='arrowicon'>
                  {collapsedMenu[parentIndex] ? (
                    <span>&#9650;</span>
                  ) : (
                    <span>&#9660;</span>
                  )}
                </div>
              )}
            </div>
            {parentItem.subItems && (
              <ul className={`SubItemsList ${collapsedMenu[parentIndex] ? 'collapsed' : 'expanded'}`}>
                {parentItem.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className='row' id={window.location.pathname === subItem.link ? 'active' : ''} onClick={() => window.location.pathname = subItem.link}>
                    <div id='title'>{subItem.title}</div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar