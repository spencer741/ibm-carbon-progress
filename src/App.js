import React, { useState } from 'react';
import 'carbon-components/css/carbon-components.css';
import {Tile} from "carbon-components-react/lib/components/Tile";
import Button from "carbon-components-react/lib/components/Button";
import {ProgressIndicator,ProgressStep} from "carbon-components-react/lib/components/ProgressIndicator";
import './ext.css'

function App() {

  const [currindex, setcurrindex ] = useState(0);

  const handler = (index) =>  setcurrindex(index);


  return (
    
    <>
      <div className="register">
        <div className="register-container">
          <ProgressIndicator
          style={{padding:"2rem"}}
            currentIndex={currindex}
            onChange={handler}
            >
            <ProgressStep
              label="First step"
              description="Step 1: Getting started with Carbon Design System"
            />
            <ProgressStep
              label="Second step"
              description="Step 2: Getting started with Carbon Design System"
            />
            <ProgressStep
              label="Third step"
              description="Step 3: Getting started with Carbon Design System"
            />
            <ProgressStep
              label="Fourth step"
              description="Step 4: Getting started with Carbon Design System"
            />
            <ProgressStep
              label="Fifth step"
              description="Step 5: Getting started with Carbon Design System"
            />
          </ProgressIndicator>
        </div>
        <div className="register-content-container">
          {currindex === 0 ?
            <div>
              <Tile key="info">
                Thank you for your interest.
                Please click next!
              </Tile>
            </div>
            : currindex === 1 ?
            <>
              <Tile key="info">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
                sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. 
                Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, 
                commodo vitae, ornare sit amet, wisi. 
              </Tile>
            </>
            : currindex === 2 ? 
            <>
            <Tile key="info">
              Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim
              ac dui.
            </Tile>

            </>
            : currindex === 3 ?
            <>
            <Tile key="info">
              Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
              neque egestas augue, eu vulputate magna eros eu erat. 
            </Tile>
          
            </>
            : currindex === 4 ?
            <>
            <Tile key="info">
              Aliquam erat volutpat. Nam dui mi, tincidunt quis,
              accumsan porttitor, facilisis luctus, metus
            </Tile>
          
            </>
            : null}
          
      </div>
        <div className="register-button-container">
          {/*Incorporate some conditional rendering here to specify the end of the progress indicator (submit) and
            *maybe not include a (previous) button at the beginning.*/}
          <Button onClick={() => handler(currindex - 1)} style={{float:"left"}} size="field" kind="tertiary">Prev</Button>
          <Button onClick={() => handler(currindex + 1)} style={{float:"right"}} size="field" kind="tertiary">Next</Button>
        </div>
      </div>
    </>
  );
}

export default App;
