import { useMemo, useState } from 'react';
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
