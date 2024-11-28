import React from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function CustomSidebar({ setScreen }) { // Destructure setScreen from props
    return (
        <Sidebar
            width="270px"
            backgroundColor="blue"
            transitionDuration={300}
            breakPoint="md" // This sets the responsive behavior for medium screens and above
        >
            <Menu>
                {/* Dashboard MenuItem */}
                <MenuItem
                    onClick={() => setScreen('dashboard')} // Correctly set screen on click
                    icon={<i className="fas fa-fw fa-tachometer-alt"></i>}
                >
                    <span>Dashboard</span>
                </MenuItem>

                {/* System Architecture SubMenu */}
                <SubMenu
                    label="System Architecture"
                    icon={<i className="fas fa-cogs fa-sm fa-fw"></i>}
                >
                    <MenuItem onClick={() => setScreen('workflow-overview')}>
                        <span>Workflow Overview</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('process-flow')}>
                        <span>Process Flow</span>
                    </MenuItem>
                </SubMenu>

                {/* Warehouse SubMenu */}
                <SubMenu
                    label="Warehouse App"
                    icon={<i className="fas fa-user fa-sm fa-fw"></i>}
                >
                    <MenuItem onClick={() => setScreen('wd-warehouse-app')}>
                        <span>Workflow Digram</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('cbc-warehouse-app')}>
                        <span>Click By Click</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('v-warehouse-app')}>
                        <span>Video</span>
                    </MenuItem>
                </SubMenu>

                {/* Admin App SubMenu */}
                <SubMenu
                    label="Admin App"
                    icon={<i className="fas fa-user fa-sm fa-fw"></i>}
                >
                    <MenuItem onClick={() => setScreen('wd-regional-manager')}>
                        <span>Workflow Digram</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('cbc-regional-manager')}>
                        <span>Click By Click</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('v-regional-manager')}>
                        <span>Video</span>
                    </MenuItem>
                </SubMenu>


                {/* App lifecycle management SubMenu */}
                <SubMenu
                    label="App lifecycle management"
                    icon={<i className="fas fa-user fa-sm fa-fw"></i>}
                >
                    <MenuItem onClick={() => setScreen('wd-app-lifecycle-management')}>
                        <span>Workflow Digram</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('cbc-app-lifecycle-management')}>
                        <span>Click By Click</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('v-app-lifecycle-management')}>
                        <span>Video</span>
                    </MenuItem>
                </SubMenu>

                {/* Supplier Portal SubMenu */}
                <SubMenu
                    label="Supplier Portal"
                    icon={<i className="fas fa-user fa-sm fa-fw"></i>}
                >
                    <MenuItem onClick={() => setScreen('wd-supplier-portal')}>
                        <span>Workflow Digram</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('cbc-supplier-portal')}>
                        <span>Click By Click</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('v-supplier-portal')}>
                        <span>Video</span>
                    </MenuItem>
                </SubMenu>


                {/* Invoice Processing SubMenu */}
                <SubMenu
                    label="Invoice Processing"
                    icon={<i className="fas fa-user fa-sm fa-fw"></i>}
                >
                    <MenuItem onClick={() => setScreen('wd-invoice-processing')}>
                        <span>Workflow Digram</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('cbc-invoice-processing')}>
                        <span>Click By Click</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('v-invoice-processing')}>
                        <span>Video</span>
                    </MenuItem>
                </SubMenu>

                {/* Ability to Ask Questions SubMenu */}
                <SubMenu
                    label="Ability to Ask Questions"
                    icon={<i className="fas fa-user fa-sm fa-fw"></i>}
                >
                    <MenuItem onClick={() => setScreen('wd-ability-to-ask-questions')}>
                        <span>Workflow Digram</span>
                    </MenuItem>
                    <MenuItem onClick={() => setScreen('cbc-ability-to-ask-questions')}>
                        <span>Click By Click</span>
                    </MenuItem>
                    
                </SubMenu>

                {/* Power Automates for the apps SubMenu */}
                <SubMenu
                    label="Power Automates for the apps"
                    icon={<i className="fas fa-user fa-sm fa-fw"></i>}
                >
                
                    <MenuItem onClick={() => setScreen('cbc-Power-Automates-for-the-apps')}>
                        <span>Click By Click</span>
                    </MenuItem>
                    
                </SubMenu>
                

                {/* Finale Video MenuItem */}
                <MenuItem
                    onClick={() => setScreen('Sales-video')}
                    icon={<i className="fas fa-fw fa-video"></i>}
                >
                    <span>Sales Video</span>
                </MenuItem>


                <MenuItem
                    onClick={() => setScreen('finale-video')}
                    icon={<i className="fas fa-fw fa-video"></i>}
                >
                    <span>Finale Video</span>
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}

export default CustomSidebar;