import React from 'react';
import FinaleVideoDemo from '../assets/video assets/Microsoft Power Platform - L100 Demo - Finale Video.mp4';

function FinaleVideo() {
  return (
    // Content Wrapper
    <div id="content-wrapper" className="d-flex flex-column">

      {/* Main Content */}
      <div id="content">

        {/* Begin Page Content */}
        <div className="container-fluid">

          
            <div className="card-body d-flex justify-content-center align-items-center p-0">
              <video autoPlay muted controls>
                <source src={FinaleVideoDemo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    
  );
}

export default FinaleVideo;
