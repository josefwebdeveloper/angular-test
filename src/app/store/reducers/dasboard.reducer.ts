import { createReducer, on } from "@ngrx/store";
import { initialDashboardState } from "../state/dasboard.state";
import { dashboardActions } from "../actions/dashboard.actions";

export const dashboardKey = 'dashboard';
export const dashboardReducer = createReducer(
  initialDashboardState,
  on(dashboardActions.changeView, (state, { payload }) => ({ ...state, view: payload }))
);

