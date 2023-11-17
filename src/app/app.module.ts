import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxColorsModule } from "ngx-colors";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { appReducer } from "./store/reducers/app.reducer";
import { eventsEffects } from "./store/effects/events.effects";
import { ViewComponent } from './components/view/view.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ListEventComponent } from './components/list-event/list-event.component';
import { EventDialogComponent } from './components/event-dalog/event-dialog.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TileViewComponent } from './components/tile-view/tile-view.component';
import { TileEventComponent } from './components/tile-event/tile-event.component';
import { MaterialModule } from "./shared/material.module";
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewComponent,
    ListViewComponent,
    ListEventComponent,
    EventDialogComponent,
    PaginatorComponent,
    TileViewComponent,
    TileEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([eventsEffects]),
    FormsModule,
    MaterialModule,
    NgxColorsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
