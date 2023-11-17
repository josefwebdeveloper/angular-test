import { createAction, props } from "@ngrx/store";
import { View } from "../../models/dashboard.model";

const changeView = createAction('[app] change view', props<{ payload: View }>());

export const dashboardActions = {
  changeView
}
