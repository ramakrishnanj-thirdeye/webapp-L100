import React from 'react';

function CbcSupplierPortal() {
  return (
    // Content Wrapper
    <div id="content-wrapper" className="d-flex flex-column">

      {/* Main Content */}
      <div id="content">

        {/* Begin Page Content */}
        <div className="container-fluid">

          <div className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 56px)' }}>
            <div className="card-body d-flex justify-content-center align-items-center p-0">
              <iframe
                id="demoframe"
                style={{ height: 'calc(100vh - 56px)', width: '100%' }}
                sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
                src="https://regale.cloud/thirdeye-data/play/3833/powerplatform-accelerate-innvoation-with-ai-in-low-code-supplier-portal-power-pa#/0/0"
                title="Demo Frame"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CbcSupplierPortal;
