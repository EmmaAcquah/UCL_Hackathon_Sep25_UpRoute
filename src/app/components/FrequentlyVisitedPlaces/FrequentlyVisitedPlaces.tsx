import './FrequentlyVisitedPlaces.css';

interface FrequentlyVisitedPlacesProps {
  selectFrequentlyVisitedPlace: (place: string) => void;
}

const FrequentlyVisitedPlaces = ({
  selectFrequentlyVisitedPlace
}: FrequentlyVisitedPlacesProps) => {

  const handlePlaceClick = (place: string) => {
    selectFrequentlyVisitedPlace(place);
  };

  return (
    <div className="FrequentlyVisitedPlaces">
      <h2>Your frequently visited places</h2>
      <ul>
        <li>
          <button onClick={() => handlePlaceClick('Staff Office')}>
            Staff Office
          </button>
        </li>
        <li>
          <button onClick={() => handlePlaceClick('Lecture Hall')}>
            Lecture Hall
          </button>
        </li>
        <li>
          <button onClick={() => handlePlaceClick('Chemistry Books')}>
            Chemistry Books
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FrequentlyVisitedPlaces;
