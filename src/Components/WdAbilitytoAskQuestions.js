import React from 'react';
import WdAbilitytoAskQuestionsDiagram from '../assets/Ability to Ask Questions for Power Platform - L100.png'

function Home() {
  return (
    // Content Wrapper
    <div id="content-wrapper" className="d-flex flex-column">

      {/* Main Content */}
      <div id="content">

        {/* Begin Page Content */}
        <div className="container-fluid">

          
            <div className="card-body d-flex justify-content-center align-items-center p-0">
              <img
                src={WdAbilitytoAskQuestionsDiagram}
                alt="Brand Logo"
                style={{  width: '100%' }}
              />
            </div>
          </div>

        </div>
      </div>
    
  );
}

export default Home;
