import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EventsState } from "../state/events.state";
import { eventsKey } from "../reducers/events.reducer";

export namespace EventsSelectors {
  const eventsSelector = createFeatureSelector<EventsState>(eventsKey);
  export const selectEvents = createSelector(eventsSelector, state => state.events);
}
