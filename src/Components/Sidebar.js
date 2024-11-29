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

import React from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';

function CustomSidebar({ setScreen, activeScreen }) { // Add activeScreen prop
    return (
        <Sidebar
            style={{ backgroundColor: "#2d8029", height: "100vh" }}
            width="270px"
            transitionDuration={300}
            breakPoint="md"
        >
            <Menu>
                {/* Dashboard MenuItem */}
                <MenuItem
                    onClick={() => setScreen('dashboard')}
                    icon={<i className="fas fa-fw fa-tachometer-alt"></i>}
                    style={{
                        fontWeight: activeScreen === 'dashboard' ? 'bold' : 'normal',
                    }}
                >
                    <span>Dashboard</span>
                </MenuItem>

                {/* System Architecture SubMenu */}
                <SubMenu
                    label="System Architecture"
                    icon={<i className="fa-solid fa-chart-diagram"></i>}
                >
                    <MenuItem
                        onClick={() => setScreen('workflow-overview')}
                        style={{
                            fontWeight: activeScreen === 'workflow-overview' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Workflow Overview</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('process-flow')}
                        style={{
                            fontWeight: activeScreen === 'process-flow' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Process Flow</span>
                    </MenuItem>
                </SubMenu>

                {/* Warehouse SubMenu */}
                <SubMenu
                    label="Warehouse App"
                    icon={<i className="fa-solid fa-warehouse"></i>}
                >
                    <MenuItem
                        onClick={() => setScreen('wd-warehouse-app')}
                        style={{
                            fontWeight: activeScreen === 'wd-warehouse-app' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Workflow Diagram</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('cbc-warehouse-app')}
                        style={{
                            fontWeight: activeScreen === 'cbc-warehouse-app' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Click By Click</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('v-warehouse-app')}
                        style={{
                            fontWeight: activeScreen === 'v-warehouse-app' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Video</span>
                    </MenuItem>
                </SubMenu>

                {/* Admin App SubMenu */}
                <SubMenu
                    label="Admin App"
                    icon={<i className="fa-solid fa-user-tie"></i>}
                >
                    <MenuItem
                        onClick={() => setScreen('wd-regional-manager')}
                        style={{
                            fontWeight: activeScreen === 'wd-regional-manager' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Workflow Diagram</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('cbc-regional-manager')}
                        style={{
                            fontWeight: activeScreen === 'cbc-regional-manager' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Click By Click</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('v-regional-manager')}
                        style={{
                            fontWeight: activeScreen === 'v-regional-manager' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Video</span>
                    </MenuItem>
                </SubMenu>

                {/* App lifecycle management SubMenu */}
                <SubMenu
                    label="ALM"
                    icon={<i className="fa-solid fa-people-roof"></i>}
                >
                    <MenuItem
                        onClick={() => setScreen('wd-app-lifecycle-management')}
                        style={{
                            fontWeight: activeScreen === 'wd-app-lifecycle-management' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Workflow Diagram</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('cbc-app-lifecycle-management')}
                        style={{
                            fontWeight: activeScreen === 'cbc-app-lifecycle-management' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Click By Click</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('v-app-lifecycle-management')}
                        style={{
                            fontWeight: activeScreen === 'v-app-lifecycle-management' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Video</span>
                    </MenuItem>
                </SubMenu>

                {/* Supplier Portal SubMenu */}
                <SubMenu
                    label="Supplier Portal"
                    icon={<i className="fa-solid fa-truck-field"></i>}
                >
                    <MenuItem
                        onClick={() => setScreen('wd-supplier-portal')}
                        style={{
                            fontWeight: activeScreen === 'wd-supplier-portal' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Workflow Diagram</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('cbc-supplier-portal')}
                        style={{
                            fontWeight: activeScreen === 'cbc-supplier-portal' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Click By Click</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('v-supplier-portal')}
                        style={{
                            fontWeight: activeScreen === 'v-supplier-portal' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Video</span>
                    </MenuItem>
                </SubMenu>

                {/* Invoice Processing SubMenu */}
                <SubMenu
                    label="Invoice Processing"
                    icon={<i className="fa-solid fa-file-invoice"></i>}
                >
                    <MenuItem
                        onClick={() => setScreen('wd-invoice-processing')}
                        style={{
                            fontWeight: activeScreen === 'wd-invoice-processing' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Workflow Diagram</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('cbc-invoice-processing')}
                        style={{
                            fontWeight: activeScreen === 'cbc-invoice-processing' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Click By Click</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('v-invoice-processing')}
                        style={{
                            fontWeight: activeScreen === 'v-invoice-processing' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Video</span>
                    </MenuItem>
                </SubMenu>

                {/* Ability to Ask Questions SubMenu */}
                <SubMenu
                    label="Ability to Ask Questions"
                    icon={<i className="fa-solid fa-question"></i>}
                >
                    <MenuItem
                        onClick={() => setScreen('wd-ability-to-ask-questions')}
                        style={{
                            fontWeight: activeScreen === 'wd-ability-to-ask-questions' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Workflow Diagram</span>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setScreen('cbc-ability-to-ask-questions')}
                        style={{
                            fontWeight: activeScreen === 'cbc-ability-to-ask-questions' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Click By Click</span>
                    </MenuItem>
                </SubMenu>

                {/* Power Automates for the apps SubMenu */}
                <SubMenu
                    label="Power Automates"
                    icon={<i className="fas fa-cogs fa-sm fa-fw"></i>}
                >
                    <MenuItem
                        onClick={() => setScreen('cbc-Power-Automates-for-the-apps')}
                        style={{
                            fontWeight: activeScreen === 'cbc-Power-Automates-for-the-apps' ? 'bold' : 'normal',
                        }}
                    >
                        <span>Click By Click</span>
                    </MenuItem>
                </SubMenu>

                {/* Finale Video MenuItem */}
                <MenuItem
                    onClick={() => setScreen('Sales-video')}
                    icon={<i className="fa-solid fa-user-shield"></i>}
                    style={{
                        fontWeight: activeScreen === 'Sales-video' ? 'bold' : 'normal',
                    }}
                >
                    <span>Sales Video</span>
                </MenuItem>

                <MenuItem
                    onClick={() => setScreen('finale-video')}
                    icon={<i className="fas fa-fw fa-video"></i>}
                    style={{
                        fontWeight: activeScreen === 'finale-video' ? 'bold' : 'normal',
                    }}
                >
                    <span>Finale Video</span>
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}

export default CustomSidebar;
