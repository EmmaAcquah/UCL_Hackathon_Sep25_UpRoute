import { tool } from '@openai/agents/realtime';
import { z } from 'zod';
import { SetHighlighted } from '../../types';

const showRouteToLocation = (
  setHighlighted: SetHighlighted
) => {
  return tool({
    name: 'show_route_to_location',
    description: 'Show the user a route on the floorplan to a specific room in the campus building.',
    parameters: z.object({ location: z.enum(['staff office', 'lecture hall', 'chemistry books']) }),
    execute: async ({ location }) => {
      console.log(`Showing route to: ${location}`);
      if (location === 'staff office') {
        setHighlighted(prev => ({
          ...prev,
          directionArrows: {
            '01': true,
            '02': false,
            '03': false,
          }
        }));
      } else if (location === 'lecture hall') {
        setHighlighted(prev => ({
          ...prev,
          directionArrows: {
            ...prev.directionArrows,
            '01': false,
            '02': true,
            '03': false,
          }
        }));
      } else if (location === 'chemistry books') {
        setHighlighted(prev => ({
          ...prev,
          directionArrows: {
            ...prev.directionArrows,
            '01': false,
            '02': false,
            '03': true,
          }
        }));
      }
      return `Displayed route to ${location}`;
    }
  });
};

export default showRouteToLocation;
