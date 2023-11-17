import { createFeatureSelector, createSelector } from "@ngrx/store";
import { dashboardState } from "../state/dasboard.state";
import { dashboardKey } from "../reducers/dasboard.reducer";

export namespace DashboardSelectors {
  const dashboardSelector = createFeatureSelector<dashboardState>(dashboardKey);
  export const selectView = createSelector(dashboardSelector, state => state.view);
}
