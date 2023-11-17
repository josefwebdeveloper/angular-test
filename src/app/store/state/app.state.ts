import { EventsState, initialEventState } from "./events.state";
import { eventsKey } from "../reducers/events.reducer";
import { dashboardKey } from "../reducers/dasboard.reducer";
import { dashboardState, initialDashboardState } from "./dasboard.state";

export interface IAppState {
  [eventsKey]: EventsState;
  [dashboardKey]: dashboardState;

}

export const initialAppState: IAppState = {
  [eventsKey]: initialEventState,
  [dashboardKey]: initialDashboardState,
};
