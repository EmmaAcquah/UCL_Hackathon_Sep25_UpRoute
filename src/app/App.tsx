import { useEffect, useMemo, useState } from 'react';
import { useRealtimeAgent } from './hooks/';
import {
  // getLocation
  showRouteToLocation
} from './tools';
import FloorPlan from './components/FloorPlan';
import Header from './components/Header';
import Button from './components/Button';
import { HighlightedState } from '../types';
import './App.css';

function App() {
  const [highlighted, setHighlighted] = useState<HighlightedState>({
    directionArrows: {
      '01': false,
      '02': false,
      '03': false,
    }
  });

  const tools = useMemo(() => {
    return [
      showRouteToLocation(setHighlighted)
    ];
  }, [setHighlighted]);

  useRealtimeAgent(tools);

  // const getLectureData = async () => {
  //   try {
  //     const response = await fetch('/api/lectures');
  //     if (!response.ok) {
  //       throw new Error(`Error fetching lecture data: ${response.statusText}`);
  //     }
  //     const data = await response.json();
  //     console.log('Lecture Data:', data);
  //   } catch (error) {
  //     console.error(error);
  //   };
  // };

  // useEffect(() => {
  //   getLectureData();
  // }, []);

  const handleLocationAClick = () => {
    setHighlighted(prev => ({
      ...prev,
      directionArrows: {
        ...prev.directionArrows,
        '01': prev.directionArrows['01'] ? false : true,
      }
    }));
  };

  const handleLocationBClick = () => {
    setHighlighted(prev => ({
      ...prev,
      directionArrows: {
        ...prev.directionArrows,
        '02': prev.directionArrows['02'] ? false : true,
      }
    }));
  };

  const handleLocationCClick = () => {
    setHighlighted(prev => ({
      ...prev,
      directionArrows: {
        ...prev.directionArrows,
        '03': prev.directionArrows['03'] ? false : true,
      }
    }));
  };

  return (
    <>
      <Header />
      <main>
        <div className="button-container">
          <Button onClick={handleLocationAClick}>To Staff Office</Button>
          <Button onClick={handleLocationBClick}>To Lecture Hall</Button>
          <Button onClick={handleLocationCClick}>To Chemistry Books</Button>
        </div>
        <div className="floorplan-container">
          <FloorPlan highlighted={highlighted} />
        </div>
      </main>
    </>
  );
}

export default App;
