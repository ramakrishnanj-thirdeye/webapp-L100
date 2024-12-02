import React, { useEffect, useState } from "react";
import "./CustomSidebar.css"; // Import the updated sidebar styles

function CustomSidebar({ isSidebarOpen, setScreen, toggleSidebar, activeScreen }) {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track the opened submenu

  // Function to toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle submenu visibility
  };

  useEffect(() => {
    if (['workflow-overview', 'process-flow'].includes(activeScreen)) {
      console.log("active screen",activeScreen)
      setOpenSubmenu('system-architecture');
    } else if (
      ['wd-warehouse-app', 'cbc-warehouse-app', 'v-warehouse-app'].includes(activeScreen)
    ) {
      setOpenSubmenu('warehouse');
    } else if (
      ['wd-regional-manager', 'cbc-regional-manager', 'v-regional-manager'].includes(activeScreen)
    ) {
      setOpenSubmenu('admin-app');
    } else if (
      ['wd-app-lifecycle-management', 'cbc-app-lifecycle-management', 'v-app-lifecycle-management'].includes(activeScreen)
    ) {
      setOpenSubmenu('app-lifecycle-management');
    } else if (
      ['wd-supplier-portal', 'cbc-supplier-portal', 'v-supplier-portal'].includes(activeScreen)
    ) {
      setOpenSubmenu('supplier-portal');
    } else if (
      ['wd-invoice-processing', 'cbc-invoice-processing', 'v-invoice-processing'].includes(activeScreen)
    ) {
      setOpenSubmenu('invoice-processing');
    } else if (
      ['wd-ability-to-ask-questions', 'cbc-ability-to-ask-questions', 'v-ability-to-ask-questions'].includes(activeScreen)
    ) {
      setOpenSubmenu('ability-to-ask-questions');
    } else if (
      ['wd-power-automates', 'cbc-power-automates', 'v-power-automates'].includes(activeScreen)
    ) {
      setOpenSubmenu('power-automates');
    } else {
      setOpenSubmenu(null);
    }
  }, [activeScreen]);



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
          <li className="menu-item" onClick={() => toggleSubmenu("system-architecture")}>
            <i className="fa-solid fa-chart-diagram"></i> System Architecture
            <i
              className={`submenu-icon ${openSubmenu === "system-architecture" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "system-architecture" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "workflow-overview" ? "active" : ""}`}
                onClick={() => {
                  setScreen("workflow-overview");
                  toggleSidebar();
                }}
              >
                Workflow Overview
              </li>
              <li
                className={`submenu-item ${activeScreen === "process-flow" ? "active" : ""}`}
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
              className={`submenu-icon ${openSubmenu === "warehouse" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "warehouse" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "wd-warehouse-app" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("wd-warehouse-app");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-warehouse-app" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-warehouse-app");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-warehouse-app" ? "active" : ""
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
              className={`submenu-icon ${openSubmenu === "admin-app" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "admin-app" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "wd-regional-manager" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("wd-regional-manager");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-regional-manager" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-regional-manager");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-regional-manager" ? "active" : ""
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
              className={`submenu-icon ${openSubmenu === "app-lifecycle-management" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "app-lifecycle-management" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "wd-app-lifecycle-management" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("wd-app-lifecycle-management");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-app-lifecycle-management" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-app-lifecycle-management");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-app-lifecycle-management" ? "active" : ""
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
              className={`submenu-icon ${openSubmenu === "supplier-portal" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "supplier-portal" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "wd-supplier-portal" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("wd-supplier-portal");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-supplier-portal" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-supplier-portal");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-supplier-portal" ? "active" : ""
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
              className={`submenu-icon ${openSubmenu === "invoice-processing" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "invoice-processing" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "wd-invoice-processing" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("wd-invoice-processing");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-invoice-processing" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-invoice-processing");
                  toggleSidebar();
                }}
              >
                Click By Click
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-invoice-processing" ? "active" : ""
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
              className={`submenu-icon ${openSubmenu === "ability-to-ask-questions" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "ability-to-ask-questions" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "wd-ability-to-ask-questions" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("wd-ability-to-ask-questions");
                  toggleSidebar();
                }}
              >
                Workflow Diagram
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-ability-to-ask-questions" ? "active" : ""
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
              className={`submenu-icon ${openSubmenu === "power-automates" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "power-automates" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "cbc-power-automates" ? "active" : ""
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
          <li 
            className={`menu-item ${activeScreen === "sales-video" ? "active" : ""}`}
            onClick={() => { setScreen('sales-video'); toggleSidebar() }}>
            <i className="fas fa-video"></i> Sales Video
          </li>

          {/* Finale Video Menu Item */}
          <li 
            className={`menu-item ${activeScreen === "finale-video" ? "active" : ""}`}
            onClick={() => { setScreen('finale-video'); toggleSidebar() }}>
            <i className="fas fa-video"></i> Finale Video
          </li>

        </ul>

      </div>
    </div>
  );
}

export default CustomSidebar;



