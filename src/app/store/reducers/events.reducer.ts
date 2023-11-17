import { createReducer, on } from "@ngrx/store";
import { initialEventState } from "../state/events.state";
import { eventsActions } from "../actions/events.action";

export const eventsKey = 'events';
export const eventsReducer = createReducer(
  initialEventState,
  on(eventsActions.successGetEvents, (state, { payload }) => ({ ...state, events: payload })),
  on(eventsActions.createEvent, (state, { payload }) => ({ ...state, events: [payload, ...state.events] })),
  on(eventsActions.updateEvent, (state, { payload }) =>
    ({ ...state, events: state.events.map(event => event.id === payload.id ? payload : event) })),
);
