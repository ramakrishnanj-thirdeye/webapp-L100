import React from 'react';
import processflowImg from '../assets/Flow Chart 2 for Power Platform - L100 (1).png';

function ProcessFlow() {
  return (
    // Content Wrapper
    <div
      id="content-wrapper"
      className="d-flex flex-column"
      style={{
        height: '100vh',
        overflow: 'auto', // Enables scrolling if content exceeds the viewport height
      }}
    >
      {/* Main Content */}
      <div id="content" className="d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
        {/* Begin Page Content */}
        <div
          className="container-fluid"
          style={{
            width: '100%',
            overflow: 'auto', // Ensures horizontal scrolling if necessary
          }}
        >
          <div className="card-body d-flex justify-content-center align-items-center p-0">
            <img
              src={processflowImg}
              alt="Process Flow"
              style={{
                width: '100%',
                height: 'auto', // Maintains aspect ratio
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessFlow;
