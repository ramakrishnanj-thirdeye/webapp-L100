// import React, { useState } from 'react';
// import Home from '../Components/Home';
// import Navbar from '../Components/Navbar';
// import CustomSidebar from '../Components/Sidebar';
// import WorkflowOverview from '../Components/WorkflowOverview';
// import ProcessFlow from '../Components/ProcessFlow';
// import WdWarehouseApp from '../Components/WdWarehouseApp';
// import CbcWarehouseApp from '../Components/WdWarehouseApp';
// import VWarehouseApp from '../Components/VWarehouseApp';
// import WdAdminApp from '../Components/WdAdminApp';
// import CbcAdminApp from '../Components/CbcAdminApp';
// import VAdminApp from '../Components/VAdminApp';
// import WdALM from '../Components/WdALM';
// import CbcALM from '../Components/CbcALM';
// import VALM from '../Components/VALM';
// import WdSupplierPortal from '../Components/WdSupplierPortal';
// import CbcSupplierPortal from '../Components/CbcSupplierPortal';
// import VSupplierPortal from '../Components/VSupplierPortal';
// import WdInvoiceProcessing from '../Components/WdInvoiceProcessing';
// import CbcInvoiceProcessing from '../Components/CbcInvoiceProcessing';
// import VInvoiceProcessing from '../Components/VInvoiceProcessing';
// import WdAbilitytoAskQuestions from '../Components/WdAbilitytoAskQuestions';
// import CbcAbilitytoAskQuestions from '../Components/CbcAbilitytoAskQuestions';
// import CbcPowerAutomates from '../Components/CbcPowerAutomates';
// import SalesVideo from '../Components/SalesVideo';
// import FinaleVideo from '../Components/FinaleVideo';

// function Layout() {
//     const [screen, setScreen] = useState(''); // Initial empty screen state

//     return (
//         <div>
//             <Navbar />
//             <div className="row">
//                 <div className="col-2">
//                     <CustomSidebar setScreen={setScreen} /> {/* Pass setScreen to CustomSidebar */}
//                 </div>
//                 <div className="col-10">
//                     {screen === 'dashboard' && <Home />}
//                     {screen === 'workflow-overview' && <WorkflowOverview />}
//                     {screen === 'process-flow' && <ProcessFlow />}
//                     {screen === 'wd-warehouse-app' && <WdWarehouseApp />}
//                     {screen === 'cbc-warehouse-app' && <CbcWarehouseApp />}
//                     {screen === 'v-warehouse-app' && <VWarehouseApp />}
//                     {screen === 'wd-regional-manager' && <WdAdminApp />}
//                     {screen === 'cbc-regional-manager' && <CbcAdminApp />}
//                     {screen === 'v-regional-manager' && <VAdminApp />}
//                     {screen === 'Wd-app-lifecycle-management' && <WdALM />}
//                     {screen === 'cbc-app-lifecycle-management' && <CbcALM />}
//                     {screen === 'v-app-lifecycle-management' && <VALM />}
//                     {screen === 'wd-supplier-portal' && <WdSupplierPortal />}
//                     {screen === 'cbc-supplier-portal' && <CbcSupplierPortal />}
//                     {screen === 'v-supplier-portal' && <VSupplierPortal />}
//                     {screen === 'wd-invoice-processing' && <WdInvoiceProcessing />}
//                     {screen === 'cbc-invoice-processing' && <CbcInvoiceProcessing />}
//                     {screen === 'v-invoice-processing' && <VInvoiceProcessing />}
//                     {screen === 'wd-ability-to-ask-questions' && <WdAbilitytoAskQuestions />}
//                     {screen === 'cbc-ability-to-ask-questions' && <CbcAbilitytoAskQuestions />}
//                     {screen === 'cbc-Power-Automates-for-the-apps' && <CbcPowerAutomates />}
//                     {screen === 'sales-video' && <SalesVideo />}
//                     {screen === 'finale-video' && <FinaleVideo />}
//                     {/* Add other conditions for other screens as needed */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Layout;




// import React, { useState } from 'react';
// import Home from '../Components/Home';
// import Navbar from '../Components/Navbar';
// import CustomSidebar from '../Components/Sidebar';
// import WorkflowOverview from '../Components/WorkflowOverview';
// import ProcessFlow from '../Components/ProcessFlow';
// import WdWarehouseApp from '../Components/WdWarehouseApp';
// import CbcWarehouseApp from '../Components/CbcWarehouseApp';
// import VWarehouseApp from '../Components/VWarehouseApp';
// import WdAdminApp from '../Components/WdAdminApp';
// import CbcAdminApp from '../Components/CbcAdminApp';
// import VAdminApp from '../Components/VAdminApp';
// import WdALM from '../Components/WdALM';
// import CbcALM from '../Components/CbcALM';
// import VALM from '../Components/VALM';
// import WdSupplierPortal from '../Components/WdSupplierPortal';
// import CbcSupplierPortal from '../Components/CbcSupplierPortal';
// import VSupplierPortal from '../Components/VSupplierPortal';
// import WdInvoiceProcessing from '../Components/WdInvoiceProcessing';
// import CbcInvoiceProcessing from '../Components/CbcInvoiceProcessing';
// import VInvoiceProcessing from '../Components/VInvoiceProcessing';
// import WdAbilitytoAskQuestions from '../Components/WdAbilitytoAskQuestions';
// import CbcAbilitytoAskQuestions from '../Components/CbcAbilitytoAskQuestions';
// import CbcPowerAutomates from '../Components/CbcPowerAutomates';
// import SalesVideo from '../Components/SalesVideo';
// import FinaleVideo from '../Components/FinaleVideo';

// function Layout() {
//     const [screen, setScreen] = useState('dashboard'); // Default screen
//     const [step, setStep] = useState(0); // Step counter

//     <CustomSidebar setScreen={setScreen} activeScreen={screen} />


//     // Define all screens for navigation
//     const screens = [
//         'dashboard',
//         'workflow-overview',
//         'process-flow',
//         'wd-warehouse-app',
//         'cbc-warehouse-app',
//         'v-warehouse-app',
//         'wd-regional-manager',
//         'cbc-regional-manager',
//         'v-regional-manager',
//         'Wd-app-lifecycle-management',
//         'cbc-app-lifecycle-management',
//         'v-app-lifecycle-management',
//         'wd-supplier-portal',
//         'cbc-supplier-portal',
//         'v-supplier-portal',
//         'wd-invoice-processing',
//         'cbc-invoice-processing',
//         'v-invoice-processing',
//         'wd-ability-to-ask-questions',
//         'cbc-ability-to-ask-questions',
//         'cbc-Power-Automates-for-the-apps',
//         'sales-video',
//         'finale-video',
//     ];

//     // Handle navigation using play button
//     const handlePlayButtonClick = () => {
//         const nextStep = (step + 1) % screens.length; // Loop back to the start after the last step
//         setScreen(screens[nextStep]);
//         setStep(nextStep);
//     };

//     // Render the component based on the selected screen
//     const renderScreen = () => {
//         switch (screen) {
//             case 'dashboard':
//                 return <Home />;
//             case 'workflow-overview':
//                 return <WorkflowOverview />;
//             case 'process-flow':
//                 return <ProcessFlow />;
//             case 'wd-warehouse-app':
//                 return <WdWarehouseApp />;
//             case 'cbc-warehouse-app':
//                 return <CbcWarehouseApp />;
//             case 'v-warehouse-app':
//                 return <VWarehouseApp />;
//             case 'wd-regional-manager':
//                 return <WdAdminApp />;
//             case 'cbc-regional-manager':
//                 return <CbcAdminApp />;
//             case 'v-regional-manager':
//                 return <VAdminApp />;
//             case 'Wd-app-lifecycle-management':
//                 return <WdALM />;
//             case 'cbc-app-lifecycle-management':
//                 return <CbcALM />;
//             case 'v-app-lifecycle-management':
//                 return <VALM />;
//             case 'wd-supplier-portal':
//                 return <WdSupplierPortal />;
//             case 'cbc-supplier-portal':
//                 return <CbcSupplierPortal />;
//             case 'v-supplier-portal':
//                 return <VSupplierPortal />;
//             case 'wd-invoice-processing':
//                 return <WdInvoiceProcessing />;
//             case 'cbc-invoice-processing':
//                 return <CbcInvoiceProcessing />;
//             case 'v-invoice-processing':
//                 return <VInvoiceProcessing />;
//             case 'wd-ability-to-ask-questions':
//                 return <WdAbilitytoAskQuestions />;
//             case 'cbc-ability-to-ask-questions':
//                 return <CbcAbilitytoAskQuestions />;
//             case 'cbc-Power-Automates-for-the-apps':
//                 return <CbcPowerAutomates />;
//             case 'sales-video':
//                 return <SalesVideo />;
//             case 'finale-video':
//                 return <FinaleVideo />;
//             default:
//                 return <Home />;
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="layout-container d-flex">
//                 {/* Sidebar Section */}
//                 <div className="sidebar">
//                     <CustomSidebar setScreen={setScreen} />
//                 </div>
//                 {/* Main Content Area */}
//                 <div className="main-content flex-grow-1">
//                     {renderScreen()}
//                     {/* Play Button */}
//                     <button
//                         className="btn btn-primary play-button"
//                         onClick={handlePlayButtonClick}
//                     >
//                         <i className="fa fa-play" aria-hidden="true"></i> {step + 1}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Layout;







import React, { useState } from 'react';
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
    const [screen, setScreen] = useState('dashboard'); // Default screen
    const [step, setStep] = useState(0); // Step counter

    // Define all screens for navigation
    const screens = [
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
        'cbc-Power-Automates-for-the-apps',
        'sales-video',
        'finale-video',
    ];

    // Handle navigation using play button
    const handlePlayButtonClick = () => {
        const nextStep = (step + 1) % screens.length; // Loop back to the start after the last step
        setScreen(screens[nextStep]);
        setStep(nextStep);
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
            case 'cbc-Power-Automates-for-the-apps':
                return <CbcPowerAutomates />;
            case 'sales-video':
                return <SalesVideo />;
            case 'finale-video':
                return <FinaleVideo />;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <Navbar />
            <div className="layout-container d-flex">
                {/* Sidebar Section */}
                <div className="sidebar">
                    <CustomSidebar setScreen={setScreen} activeScreen={screen} />
                </div>
                {/* Main Content Area */}
                <div className="main-content flex-grow-1">
                    {renderScreen()}
                    {/* Play Button */}
                    <button
                        className="btn btn-primary play-button"
                        onClick={handlePlayButtonClick}
                    >
                        <i className="fa fa-play" aria-hidden="true"></i> {step + 1}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Layout;
