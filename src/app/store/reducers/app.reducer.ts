import { IAppState } from "../state/app.state";
import { eventsKey, eventsReducer } from "./events.reducer";
import { ActionReducerMap } from "@ngrx/store";
import { dashboardKey, dashboardReducer } from "./dasboard.reducer";

export const appReducer: ActionReducerMap<IAppState, any> = {
  [eventsKey]: eventsReducer,
  [dashboardKey]: dashboardReducer
};
