import { createAction, props } from "@ngrx/store";
import { EventData } from "../../models/events.model";

const startGetEvents = createAction('[Events] Start Get Events');
const successGetEvents = createAction('[Events] Success Get Events', props<{ payload: EventData[] }>());
const errorGetEvents = createAction('[Events] Error Get Events', props<{ payload: any }>());

const createEvent = createAction('[Events] Create Event', props<{ payload: EventData }>());

const updateEvent = createAction('[Events] Update Event', props<{ payload: EventData }>());

export const eventsActions = {
  startGetEvents,
  successGetEvents,
  errorGetEvents,
  createEvent,
  updateEvent
}
