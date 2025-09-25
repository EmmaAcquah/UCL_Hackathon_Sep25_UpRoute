import { useEffect, useMemo, useState } from 'react';
import { useRealtimeAgent } from './hooks/';
import { getWeather, createDisplayTextTool } from './tools';
import FloorPlan from './components/FloorPlan';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState<string>('');

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
        <FloorPlan />
        {/* <h1>OpenAI Realtime Agent Deployment Spike 01</h1>
        <div>Output:</div>
        <div>{displayText}</div> */}
      </main>
    </>
  );
}

export default App;
