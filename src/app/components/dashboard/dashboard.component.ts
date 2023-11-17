import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAppState } from "../../store/state/app.state";
import { Store } from "@ngrx/store";
import { eventsActions } from "../../store/actions/events.action";
import { EventsSelectors } from "../../store/selectors/events.selector";
import { filter, Subscription } from "rxjs";
import { EventData } from "../../models/events.model";
import { MatDialog } from "@angular/material/dialog";
import { EventDialogComponent } from "../event-dalog/event-dialog.component";
import { dashboardActions } from "../../store/actions/dashboard.actions";
import { DialogData, DialogMode, View } from "../../models/dashboard.model";
import { DashboardSelectors } from '../../store/selectors/dasboard.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  events!: EventData[];
  dashboardMode$ = this.store.select(DashboardSelectors.selectView);

  constructor(
    private store: Store<IAppState>,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {

    this.store.dispatch(eventsActions.startGetEvents());
    this.subscription.add(this.store.select(EventsSelectors.selectEvents).subscribe((data) => {
      if (data.length > 0) {
        this.events = data;
      }
    }))

  }

  openDialog(event?: EventData) {
    const dialog = this.dialog.open(EventDialogComponent, {
      width: window.innerWidth > 600 ? '40%' : '100%',
      height: '100vh',
      data: <DialogData>{
        mode: event ? DialogMode.Edit : DialogMode.New,
        event: event
      }
    })
      .updatePosition({
        right: '0px',
        top: '0px'
      }).afterClosed().pipe(filter(res => !!res)).subscribe(({ result, mode }) => {
        if (mode === DialogMode.New) {
          result.id = this.events.length + 1;
          this.store.dispatch(eventsActions.createEvent({ payload: result }));
        } else {
          this.store.dispatch(eventsActions.updateEvent({ payload: result }));
        }

        dialog.unsubscribe();
      });
  }

  changeView(view: View) {
    this.store.dispatch(dashboardActions.changeView({ payload: view }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  protected readonly View = View;
}
