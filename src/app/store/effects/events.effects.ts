import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ApiService } from "../../services/api.service";
import { catchError, map, of, switchMap } from "rxjs";
import { eventsActions } from "../actions/events.action";

@Injectable()
export class eventsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private apiService: ApiService,
  ) {
  }

  getItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(eventsActions.startGetEvents),
      switchMap(() => {
        return this.apiService.getEvents().pipe(
          map((result) => {
            return eventsActions.successGetEvents({ payload: result.data })
          }),
          catchError((err) => {
            return of(eventsActions.errorGetEvents({ payload: err }))
          }),
        );
      }),
    );
  },);
}
