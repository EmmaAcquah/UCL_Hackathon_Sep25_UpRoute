import { useEffect, useMemo, useState } from 'react';
import { useRealtimeAgent } from './hooks/';
import { getWeather, createDisplayTextTool } from './tools';
import FloorPlan from './components/FloorPlan';
import Header from './components/Header';
import Button from './components/Button';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState<string>('');
  // es-lint-disable-next-line @typescript-eslint/no-unused-vars
  const [highlighted, _setHighlighted] = useState({
    directionArrows: {
      '01': false,
      '02': false,
      '03': false,
    }
  });

  const tools = useMemo(() => {
    return [getWeather, createDisplayTextTool(setDisplayText)];
  }, [setDisplayText]);

  useRealtimeAgent(tools);

  const getLectureData = async () => {
    try {
      const response = await fetch('/api/lectures');
      if (!response.ok) {
        throw new Error(`Error fetching lecture data: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Lecture Data:', data);
    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
    getLectureData();
  }, []);

  return (
    <>
      <main>
        <div className='header'>
          <Header />
        </div>
        <div className="button-container">
          <Button onClick={() => alert("Button Clicked!")}>Location A</Button>
          <Button onClick={() => alert("Button Clicked!")}>Location B</Button>
          <Button onClick={() => alert("Button Clicked!")}>Location C</Button>
        </div>
        <div className="floorplan-container">
          <FloorPlan highlighted={highlighted} />
        </div>
        {/* <h1>OpenAI Realtime Agent Deployment Spike 01</h1> */}
        <div>Output:</div>
        <div>{displayText}</div>
      </main>
    </>
  );
}

export default App;
