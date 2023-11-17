import { View } from "../../models/dashboard.model";

export interface dashboardState {
  view: View;
}

export const initialDashboardState: dashboardState = {
  view: View.List,
};
