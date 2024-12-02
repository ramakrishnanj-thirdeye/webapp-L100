import React, { useEffect, useState, useRef } from 'react';

// Components
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
    // State hooks
    const [screen, setScreen] = useState('dashboard');
    const [step, setStep] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [history, setHistory] = useState([]); // Track navigation history
    const [isBackHovered, setIsBackHovered] = useState(false);
    const [isPlayHovered, setIsPlayHovered] = useState(false);

    // Reference for all screens
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
        'wd-app-lifecycle-management',
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

    // Update step when screen changes
    useEffect(() => {
        const currentStep = screensRef.current.indexOf(screen);
        if (currentStep !== -1) setStep(currentStep);
    }, [screen]);

    // Event handlers
    const handlePlayButtonClick = () => {
        const nextStep = (step + 1) % screensRef.current.length;
        setHistory([...history, screen]); // Track screen navigation
        setScreen(screensRef.current[nextStep]);
    };

    const handleSidebarMenuClick = (newScreen) => {
        if (newScreen !== screen) {
            setHistory([...history, screen]);
            setScreen(newScreen);
        }
    };

    const handleBackButtonClick = () => {
        if (history.length > 0) {
            const previousScreen = history[history.length - 1];
            setHistory(history.slice(0, -1)); // Remove last screen from history
            setScreen(previousScreen);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Screen rendering
    const renderScreen = () => {
        switch (screen) {
            case 'dashboard': return <Home />;
            case 'workflow-overview': return <WorkflowOverview />;
            case 'process-flow': return <ProcessFlow />;
            case 'wd-warehouse-app': return <WdWarehouseApp />;
            case 'cbc-warehouse-app': return <CbcWarehouseApp />;
            case 'v-warehouse-app': return <VWarehouseApp />;
            case 'wd-regional-manager': return <WdAdminApp />;
            case 'cbc-regional-manager': return <CbcAdminApp />;
            case 'v-regional-manager': return <VAdminApp />;
            case 'wd-app-lifecycle-management': return <WdALM />;
            case 'cbc-app-lifecycle-management': return <CbcALM />;
            case 'v-app-lifecycle-management': return <VALM />;
            case 'wd-supplier-portal': return <WdSupplierPortal />;
            case 'cbc-supplier-portal': return <CbcSupplierPortal />;
            case 'v-supplier-portal': return <VSupplierPortal />;
            case 'wd-invoice-processing': return <WdInvoiceProcessing />;
            case 'cbc-invoice-processing': return <CbcInvoiceProcessing />;
            case 'v-invoice-processing': return <VInvoiceProcessing />;
            case 'wd-ability-to-ask-questions': return <WdAbilitytoAskQuestions />;
            case 'cbc-ability-to-ask-questions': return <CbcAbilitytoAskQuestions />;
            case 'cbc-power-automates': return <CbcPowerAutomates />;
            case 'sales-video': return <SalesVideo />;
            case 'finale-video': return <FinaleVideo />;
            default: return <Home />;
        }
    };

    // JSX layout
    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="layout-container">
                {/* Sidebar */}
                <CustomSidebar
                    setScreen={handleSidebarMenuClick}
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                    activeScreen={screen}
                />

                {/* Main content area */}
                <div className="main-content" style={{ position: 'relative' }}>
                    {renderScreen()}

                    {/* Back Button */}
                    <button
                        className="btn btn-secondary back-button"
                        onClick={handleBackButtonClick}
                        onMouseEnter={() => setIsBackHovered(true)}
                        onMouseLeave={() => setIsBackHovered(false)}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '20px',
                            zIndex: 1000,
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0',
                            backgroundColor: isBackHovered ? 'blue' : '',
                            color: isBackHovered ? 'white' : '',
                            transition: 'background-color 0.3s ease',
                        }}
                    >
                        <i className="fa fa-arrow-left" style={{ fontSize: '12px' }}></i>
                    </button>

                    {/* Play Button */}
                    <button
                        className="btn btn-secondary play-button"
                        onClick={handlePlayButtonClick}
                        onMouseEnter={() => setIsPlayHovered(true)}
                        onMouseLeave={() => setIsPlayHovered(false)}
                        style={{
                            width: '30px',
                            height: '30px',
                            transition: 'background-color 0.3s ease',
                            backgroundColor: isPlayHovered ? 'blue' : '',
                            color: isPlayHovered ? 'white' : '',
                        }}
                    >
                        <i className="fa fa-play" style={{ fontSize: '12px' }}></i> {step + 1}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Layout;
