import React from 'react';
import demoVideo from '../assets/video assets/Microsoft Power Platform - L100 Demo - Warehouse Management APP.mp4';

function VWarehouseApp() {
  return (
    // Content Wrapper
    <div id="content-wrapper" className="d-flex flex-column">

      {/* Main Content */}
      <div id="content">

        {/* Begin Page Content */}
        <div className="container-fluid">

          <div className="d-flex justify-content-center align-items-center vh-80">
            <div className="card-body d-flex justify-content-center align-items-center p-0">
              <video autoPlay muted controls>
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default VWarehouseApp;