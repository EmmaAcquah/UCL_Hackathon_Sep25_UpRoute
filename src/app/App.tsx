import { useMemo, useState } from 'react';
import { useRealtimeAgent } from './hooks/';
import {
  // getLocation
  showRouteToLocation
} from './tools';
import FloorPlan from './components/FloorPlan';
import Header from './components/Header';
import Button from './components/Button';
import FrequentlyVisitedPlaces from './components/FrequentlyVisitedPlaces';
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

  // useRealtimeAgent(tools);

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

  const selectFrequentlyVisitedPlace = (place: string) => {
    console.log(`Selected frequently visited place: ${place}`);
    if (place === 'Staff Office') {
      handleLocationAClick();
    } else if (place === 'Lecture Hall') {
      handleLocationBClick();
    } else if (place === 'Chemistry Books') {
      handleLocationCClick();
    }
    // Implement navigation or other actions based on the selected place
  };

  return (
    <>
      <Header />
      <main>
        <FrequentlyVisitedPlaces selectFrequentlyVisitedPlace={selectFrequentlyVisitedPlace} />
        <div className="floorplan-container">
          <FloorPlan highlighted={highlighted} />
        </div>
      </main>
    </> 
  );
}

export default App;
