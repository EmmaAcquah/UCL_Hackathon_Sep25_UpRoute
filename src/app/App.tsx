import { useMemo, useState } from 'react';
import { useRealtimeAgent } from './hooks/';
import { getWeather, createDisplayTextTool } from './tools';
import FloorPlan from './components/FloorPlan';
import Header from './components/Header';
import Button from './components/Button';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState<string>('');

  const tools = useMemo(() => {
    return [getWeather, createDisplayTextTool(setDisplayText)];
  }, [setDisplayText]);

  useRealtimeAgent(tools);


  return (
    <>
      <main>
        <div className='header'>
          <Header/>
        </div>
        <div className="button-container">
          <Button onClick={() => alert("Button Clicked!")}>Location A</Button>
          <Button onClick={() => alert("Button Clicked!")}>Location B</Button>
          <Button onClick={() => alert("Button Clicked!")}>Location C</Button>
        </div>
        <div className="floorplan-container">
          <FloorPlan />
        </div>
        {/* <h1>OpenAI Realtime Agent Deployment Spike 01</h1>
        <div>Output:</div>
        <div>{displayText}</div> */}
      </main>
    </>
  );
}

export default App;
