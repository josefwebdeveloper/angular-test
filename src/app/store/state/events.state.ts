import { EventData } from "../../models/events.model";

export interface EventsState {
  events: EventData[];
}

export const initialEventState: EventsState = {
  events: [],
};
