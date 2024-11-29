import React, { useEffect, useState, useRef } from 'react';
import Home from '../Components/Home';
import Navbar from '../Components/Navbar';
import CustomSidebar from '../Components/Sidebar';
import WorkflowOverview from '../Components/WorkflowOverview';
import ProcessFlow from '../Components/ProcessFlow';
import WdWarehouseApp from '../Components/WdWarehouseApp';
import CbcWarehouseApp from '../Components/CbcWarehouseApp';
import VWarehouseApp from '../Components/VWarehouseApp';
import WdAdminApp from '../Components/WdAdminApp';
import CbcAdminApp from '../Components/CbcAdminApp';
import VAdminApp from '../Components/VAdminApp';
import WdALM from '../Components/WdALM';
import CbcALM from '../Components/CbcALM';
import VALM from '../Components/VALM';
import WdSupplierPortal from '../Components/WdSupplierPortal';
import CbcSupplierPortal from '../Components/CbcSupplierPortal';
import VSupplierPortal from '../Components/VSupplierPortal';
import WdInvoiceProcessing from '../Components/WdInvoiceProcessing';
import CbcInvoiceProcessing from '../Components/CbcInvoiceProcessing';
import VInvoiceProcessing from '../Components/VInvoiceProcessing';
import WdAbilitytoAskQuestions from '../Components/WdAbilitytoAskQuestions';
import CbcAbilitytoAskQuestions from '../Components/CbcAbilitytoAskQuestions';
import CbcPowerAutomates from '../Components/CbcPowerAutomates';
import SalesVideo from '../Components/SalesVideo';
import FinaleVideo from '../Components/FinaleVideo';

function Layout() {
    const [screen, setScreen] = useState('dashboard');
    const [step, setStep] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar state

    // Define all screens for navigation as a ref to ensure it remains constant
    const screensRef = useRef([
        'dashboard',
        'workflow-overview',
        'process-flow',
        'wd-warehouse-app',
        'cbc-warehouse-app',
        'v-warehouse-app',
        'wd-regional-manager',
        'cbc-regional-manager',
        'v-regional-manager',
        'Wd-app-lifecycle-management',
        'cbc-app-lifecycle-management',
        'v-app-lifecycle-management',
        'wd-supplier-portal',
        'cbc-supplier-portal',
        'v-supplier-portal',
        'wd-invoice-processing',
        'cbc-invoice-processing',
        'v-invoice-processing',
        'wd-ability-to-ask-questions',
        'cbc-ability-to-ask-questions',
        'cbc-power-automates',
        'sales-video',
        'finale-video',
    ]);

    useEffect(() => {
        const currentStep = screensRef.current.indexOf(screen);
        if (currentStep !== -1) {
            setStep(currentStep);
        }
    }, [screen]); // Only depend on 'screen'

    const handlePlayButtonClick = () => {
        const nextStep = (step + 1) % screensRef.current.length;
        setScreen(screensRef.current[nextStep]);
    };

    // Render the component based on the selected screen
    const renderScreen = () => {
        switch (screen) {
            case 'dashboard':
                return <Home />;
            case 'workflow-overview':
                return <WorkflowOverview />;
            case 'process-flow':
                return <ProcessFlow />;
            case 'wd-warehouse-app':
                return <WdWarehouseApp />;
            case 'cbc-warehouse-app':
                return <CbcWarehouseApp />;
            case 'v-warehouse-app':
                return <VWarehouseApp />;
            case 'wd-regional-manager':
                return <WdAdminApp />;
            case 'cbc-regional-manager':
                return <CbcAdminApp />;
            case 'v-regional-manager':
                return <VAdminApp />;
            case 'Wd-app-lifecycle-management':
                return <WdALM />;
            case 'cbc-app-lifecycle-management':
                return <CbcALM />;
            case 'v-app-lifecycle-management':
                return <VALM />;
            case 'wd-supplier-portal':
                return <WdSupplierPortal />;
            case 'cbc-supplier-portal':
                return <CbcSupplierPortal />;
            case 'v-supplier-portal':
                return <VSupplierPortal />;
            case 'wd-invoice-processing':
                return <WdInvoiceProcessing />;
            case 'cbc-invoice-processing':
                return <CbcInvoiceProcessing />;
            case 'v-invoice-processing':
                return <VInvoiceProcessing />;
            case 'wd-ability-to-ask-questions':
                return <WdAbilitytoAskQuestions />;
            case 'cbc-ability-to-ask-questions':
                return <CbcAbilitytoAskQuestions />;
            case 'cbc-power-automates':
                return <CbcPowerAutomates />;
            case 'sales-video':
                return <SalesVideo />;
            case 'finale-video':
                return <FinaleVideo />;
            default:
                return <Home />;
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="layout-container">
                {/* Sidebar */}
                <div>
                    <CustomSidebar setScreen={setScreen} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </div>

                {/* Main content area */}
                <div className="main-content">
                    {renderScreen()}

                    {/* Play Button */}
                    <button
                        className="btn btn-primary play-button"
                        onClick={handlePlayButtonClick}
                        style={{
                            position: 'fixed',
                            top: '90px',
                            right: '20px',
                        }}
                    >
                        <i className="fa fa-play" aria-hidden="true"></i> {step + 1}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Layout;
