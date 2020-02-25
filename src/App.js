import React, { useState } from 'react';
import 'carbon-components/css/carbon-components.css';
import {Tile} from "carbon-components-react/lib/components/Tile";
import Form from "carbon-components-react/lib/components/Form";
import FormItem from "carbon-components-react/lib/components/FormItem";
import TileGroup from "carbon-components-react/lib/components/TileGroup";
import Button from "carbon-components-react/lib/components/Button";
import {ProgressIndicator,ProgressStep} from "carbon-components-react/lib/components/ProgressIndicator";
import './ext.css'



function App() {

  const [currindex, setcurrindex ] = useState(0);

  const handler = (index) => {
    console.log(index);
    setcurrindex(index);

  }

  return (
    
    <>
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
      <div className="container">
      {currindex === 0 ?
        <div>
          <Tile key="info">
            Thank you for your interest in everonics software services.<br/><br/>
            Let's get your organization registered!<br/><br/>
            The following pages will guide you through registering your organization and handling 
            some initial administrative tasks. <br/><br/>
            Once submitted, your registration application will
            be reviewed by our team for approval.<br/><br/>
            You will be notified upon approval for next steps to set up your organization's platform.<br/>
          </Tile>
          <br/>
          <Button onClick={() => handler(1)} style={{float:"right"}} size="field" kind="tertiary">Next</Button>
        </div>
        : currindex === 1 ?
        <>
        <Tile key="info">
            Thank you for your interest in everonics software services.<br/><br/>
            Let's get your organization registered!<br/><br/>
            The following pages will guide you through registering your organization and handling 
            some initial administrative tasks. <br/><br/>
            Once submitted, your registration application will
            be reviewed by our team for approval.<br/><br/>
            You will be notified upon approval for next steps to set up your organization's platform.<br/>
          </Tile>
          <br/>
        <Button onClick={() => handler(0)} style={{float:"left"}} size="field" kind="tertiary">Prev</Button>
        <Button onClick={() => handler(2)} style={{float:"right"}} size="field" kind="tertiary">Next</Button>
        </>
        : currindex === 2 ? 
        <>
        <Tile key="info">
            Thank you for your interest in everonics software services.<br/><br/>
            Let's get your organization registered!<br/><br/>
            The following pages will guide you through registering your organization and handling 
            some initial administrative tasks. <br/><br/>
            Once submitted, your registration application will
            be reviewed by our team for approval.<br/><br/>
            You will be notified upon approval for next steps to set up your organization's platform.<br/>
          </Tile>
          <br/>
        <Button onClick={() => handler(1)} style={{float:"left"}} size="field" kind="tertiary">Prev</Button>
        <Button onClick={() => handler(3)} style={{float:"right"}} size="field" kind="tertiary">Next</Button>
        </>
        : currindex === 3 ?
        <>
        <Tile key="info">
            Thank you for your interest in everonics software services.<br/><br/>
            Let's get your organization registered!<br/><br/>
            The following pages will guide you through registering your organization and handling 
            some initial administrative tasks. <br/><br/>
            Once submitted, your registration application will
            be reviewed by our team for approval.<br/><br/>
            You will be notified upon approval for next steps to set up your organization's platform.<br/>
          </Tile>
          <br/>
        <Button onClick={() => handler(2)} style={{float:"left"}} size="field" kind="tertiary">Prev</Button>
        <Button onClick={() => handler(4)} style={{float:"right"}} size="field" kind="tertiary">Next</Button>
        </>
        : currindex === 4 ?
        <>
        <Tile key="info">
            Thank you for your interest in everonics software services.<br/><br/>
            Let's get your organization registered!<br/><br/>
            The following pages will guide you through registering your organization and handling 
            some initial administrative tasks. <br/><br/>
            Once submitted, your registration application will
            be reviewed by our team for approval.<br/><br/>
            You will be notified upon approval for next steps to set up your organization's platform.<br/>
          </Tile>
          <br/>
        <Button onClick={() => handler(3)} style={{float:"left"}} size="field" kind="tertiary">Prev</Button>
        </>
        : null}


     </div>
     </>
     
  );
}

export default App;
