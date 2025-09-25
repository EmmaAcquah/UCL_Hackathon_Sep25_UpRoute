import { tool } from "@openai/agents/realtime";
import { z } from "zod";

// Mock implementation
const getLocation = tool({
  name: "get_room",
  description: "Return the location of a room in the campus building.",
  parameters: z.object({ location: z.string() }),
  async execute({ location }) {
    return `The path to ${location} is this way.`;
  },
});

export default getLocation;