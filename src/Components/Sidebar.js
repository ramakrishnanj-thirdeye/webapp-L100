// import React from 'react';
// import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';

// function CustomSidebar({ setScreen }) { // Destructure setScreen from props
//     return (
//         <Sidebar
//         style={{ backgroundColor: "#2d8029", height: "100vh" }}
//         width="270px"
//         transitionDuration={300}
//         breakPoint="md"
//         >
//             <Menu>
//                 {/* Dashboard MenuItem */}
//                 <MenuItem
//                     onClick={() => setScreen('dashboard')} // Correctly set screen on click
//                     icon={<i className="fas fa-fw fa-tachometer-alt"></i>}
//                 >
//                     <span>Dashboard</span>
//                 </MenuItem>

//                 {/* System Architecture SubMenu */}
//                 <SubMenu
//                     label="System Architecture"
//                     icon={<i class="fa-solid fa-chart-diagram"></i>}
//                 >
//                     <MenuItem onClick={() => setScreen('workflow-overview')}>
//                         <span>Workflow Overview</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('process-flow')}>
//                         <span>Process Flow</span>
//                     </MenuItem>
//                 </SubMenu>

//                 {/* Warehouse SubMenu */}
//                 <SubMenu
//                     label="Warehouse App"
//                     icon={<i class="fa-solid fa-warehouse"></i>}
                    
//                 >
//                     <MenuItem onClick={() => setScreen('wd-warehouse-app')}>
//                         <span>Workflow Digram</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('cbc-warehouse-app')}>
//                         <span>Click By Click</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('v-warehouse-app')}>
//                         <span>Video</span>
//                     </MenuItem>
//                 </SubMenu>

//                 {/* Admin App SubMenu */}
//                 <SubMenu
//                     label="Admin App"
//                     icon={<i class="fa-solid fa-user-tie"></i>}
//                 >
//                     <MenuItem onClick={() => setScreen('wd-regional-manager')}>
//                         <span>Workflow Digram</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('cbc-regional-manager')}>
//                         <span>Click By Click</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('v-regional-manager')}>
//                         <span>Video</span>
//                     </MenuItem>
//                 </SubMenu>


//                 {/* App lifecycle management SubMenu */}
//                 <SubMenu
//                     label="ALM"
//                     icon={<i class="fa-solid fa-people-roof"></i>}
//                 >
//                     <MenuItem onClick={() => setScreen('wd-app-lifecycle-management')}>
//                         <span>Workflow Digram</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('cbc-app-lifecycle-management')}>
//                         <span>Click By Click</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('v-app-lifecycle-management')}>
//                         <span>Video</span>
//                     </MenuItem>
//                 </SubMenu>

//                 {/* Supplier Portal SubMenu */}
//                 <SubMenu
//                     label="Supplier Portal"
//                     icon={<i class="fa-solid fa-truck-field"></i>}
//                 >
//                     <MenuItem onClick={() => setScreen('wd-supplier-portal')}>
//                         <span>Workflow Digram</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('cbc-supplier-portal')}>
//                         <span>Click By Click</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('v-supplier-portal')}>
//                         <span>Video</span>
//                     </MenuItem>
//                 </SubMenu>


//                 {/* Invoice Processing SubMenu */}
//                 <SubMenu
//                     label="Invoice Processing"
//                     icon={<i class="fa-solid fa-file-invoice"></i>}
//                 >
//                     <MenuItem onClick={() => setScreen('wd-invoice-processing')}>
//                         <span>Workflow Digram</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('cbc-invoice-processing')}>
//                         <span>Click By Click</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('v-invoice-processing')}>
//                         <span>Video</span>
//                     </MenuItem>
//                 </SubMenu>

//                 {/* Ability to Ask Questions SubMenu */}
//                 <SubMenu
//                     label="Ability to Ask Questions"
//                     icon={<i class="fa-solid fa-question"></i>}
//                 >
//                     <MenuItem onClick={() => setScreen('wd-ability-to-ask-questions')}>
//                         <span>Workflow Digram</span>
//                     </MenuItem>
//                     <MenuItem onClick={() => setScreen('cbc-ability-to-ask-questions')}>
//                         <span>Click By Click</span>
//                     </MenuItem>
                    
//                 </SubMenu>

//                 {/* Power Automates for the apps SubMenu */}
//                 <SubMenu
//                     label="Power Automates"
//                     icon={<i className="fas fa-cogs fa-sm fa-fw"></i>}
//                 >
                
//                     <MenuItem onClick={() => setScreen('cbc-Power-Automates-for-the-apps')}>
//                         <span>Click By Click</span>
//                     </MenuItem>
                    
//                 </SubMenu>
                

//                 {/* Finale Video MenuItem */}
//                 <MenuItem
//                     onClick={() => setScreen('Sales-video')}
//                     icon={<i class="fa-solid fa-user-shield"></i>}
//                 >
//                     <span>Sales Video</span>
//                 </MenuItem>


//                 <MenuItem
//                     onClick={() => setScreen('finale-video')}
//                     icon={<i className="fas fa-fw fa-video"></i>}
//                 >
//                     <span>Finale Video</span>
//                 </MenuItem>
//             </Menu>
//         </Sidebar>
//     );
// }

// export default CustomSidebar;

import React, { useState } from "react";
import "./CustomSidebar.css"; // Import the updated sidebar styles

function CustomSidebar({ isSidebarOpen, setScreen, toggleSidebar, activeScreen }) {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track the opened submenu

  // Function to toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle submenu visibility
  };

  return (
    <div className={`custom-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-content">
        <ul>
          {/* Dashboard Menu Item */}
          <li
            className={`menu-item ${activeScreen === "dashboard" ? "active" : ""}`}
            onClick={() => {
              setScreen("dashboard");
              toggleSidebar();
            }}
          >
            <i className="fas fa-home-alt"></i> Home
          </li>

          {/* System Architecture Menu with Submenu */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("system-architecture")}
          >
            <i className="fa-solid fa-chart-diagram"></i> System Architecture
            <i
              className={`submenu-icon ${
                openSubmenu === "system-architecture" ? "fa-chevron-up" : "fa-chevron-down"
              } fa`}
            ></i>
          </li>
          {openSubmenu === "system-architecture" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${
                  activeScreen === "workflow-overview" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("workflow-overview");
                  toggleSidebar();
                }}
              >
                Workflow Overview
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "process-flow" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("process-flow");
                  toggleSidebar();
                }}
              >
                Process Flow
              </li>
            </ul>
          )}

          {/* Warehouse Menu with Submenu */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("warehouse")}
          >
            <i className="fa-solid fa-warehouse"></i> Warehouse App
            <i
              className={`submenu-icon ${
                openSubmenu === "warehouse" ? "fa-chevron-up" : "fa-chevron-down"
              } fa`}
            ></i>
          </li>
          {openSubmenu === "warehouse" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${
                  activeScreen === "wd-warehouse-app" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("wd-warehouse-app");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "cbc-warehouse-app" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("cbc-warehouse-app");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "v-warehouse-app" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("v-warehouse-app");
                  toggleSidebar();
                }}
              >
                Video
              </li>
            </ul>
          )}

          {/* Admin App Menu with Submenu */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("admin-app")}
          >
            <i className="fa-solid fa-user-tie"></i> Admin App
            <i
              className={`submenu-icon ${
                openSubmenu === "admin-app" ? "fa-chevron-up" : "fa-chevron-down"
              } fa`}
            ></i>
          </li>
          {openSubmenu === "admin-app" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${
                  activeScreen === "wd-regional-manager" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("wd-regional-manager");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "cbc-regional-manager" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("cbc-regional-manager");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "v-regional-manager" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("v-regional-manager");
                  toggleSidebar();
                }}
              >
                Video
              </li>
            </ul>
          )}


           {/* App Lifecycle Management Menu with Submenu */}
           <li className="menu-item" onClick={() => toggleSubmenu("app-lifecycle-management")}>
            <i className="fa-solid fa-people-roof"></i> App Lifecycle Management
            <i
              className={`submenu-icon ${
                openSubmenu === "app-lifecycle-management" ? "fa-chevron-up" : "fa-chevron-down"
              } fa`}
            ></i>
          </li>
          {openSubmenu === "app-lifecycle-management" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${
                  activeScreen === "wd-app-lifecycle-management" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("wd-app-lifecycle-management");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "cbc-app-lifecycle-management" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("cbc-app-lifecycle-management");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "v-app-lifecycle-management" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("v-app-lifecycle-management");
                  toggleSidebar();
                }}
              >
                Video
              </li>
            </ul>
          )}
          {/* Supplier Portal Menu */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("supplier-portal")}
          >
            <i className="fa-solid fa-truck-field"></i> Supplier Portal
            <i
              className={`submenu-icon ${
                openSubmenu === "supplier-portal" ? "fa-chevron-up" : "fa-chevron-down"
              } fa`}
            ></i>
          </li>
          {openSubmenu === "supplier-portal" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${
                  activeScreen === "wd-supplier-portal" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("wd-supplier-portal");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "cbc-supplier-portal" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("cbc-supplier-portal");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "v-supplier-portal" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("v-supplier-portal");
                  toggleSidebar();
                }}
              >
                Video
              </li>
            </ul>
          )}

          {/* Invoice Processing SubMenu */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("invoice-processing")}
          >
            <i className="fa-solid fa-file-invoice"></i> Invoice Processing
            <i
              className={`submenu-icon ${
                openSubmenu === "invoice-processing" ? "fa-chevron-up" : "fa-chevron-down"
              } fa`}
            ></i>
          </li>
          {openSubmenu === "invoice-processing" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${
                  activeScreen === "wd-invoice-processing" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("wd-invoice-processing");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "cbc-invoice-processing" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("cbc-invoice-processing");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "v-invoice-processing" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("v-invoice-processing");
                  toggleSidebar();
                }}
              >
                Video
              </li>
            </ul>
          )}

          {/* Ability to Ask Questions SubMenu */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("ability-to-ask-questions")}
          >
            <i className="fa-solid fa-question"></i> Ability to Ask Questions
            <i
              className={`submenu-icon ${
                openSubmenu === "ability-to-ask-questions" ? "fa-chevron-up" : "fa-chevron-down"
              } fa`}
            ></i>
          </li>
          {openSubmenu === "ability-to-ask-questions" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${
                  activeScreen === "wd-ability-to-ask-questions" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("wd-ability-to-ask-questions");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${
                  activeScreen === "cbc-ability-to-ask-questions" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("cbc-ability-to-ask-questions");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
            </ul>
          )}

          {/* Power Automates SubMenu */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("power-automates")}
          >
            <i className="fa-solid fa-plug"></i> Power Automates
            <i
              className={`submenu-icon ${
                openSubmenu === "power-automates" ? "fa-chevron-up" : "fa-chevron-down"
              } fa`}
            ></i>
          </li>
          {openSubmenu === "power-automates" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${
                  activeScreen === "cbc-power-automates" ? "active" : ""
                }`}
                onClick={() => {
                  setScreen("cbc-power-automates");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
            </ul>

          )}

          {/* Sales Video Menu Item */}
          <li onClick={() => {setScreen('sales-video');toggleSidebar()}}>
                        <i className="fas fa-video"></i> Sales Video
                    </li>
       
        {/* Finale Video Menu Item */}
        <li onClick={() => {setScreen('finale-video');toggleSidebar()}}>
                        <i className="fas fa-video"></i> Finale Video
                    </li>

                    </ul>
        
      </div>
    </div>
  );
}

export default CustomSidebar;




