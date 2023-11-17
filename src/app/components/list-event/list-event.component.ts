import { Component, Input } from '@angular/core';
import { EventData } from "../../models/events.model";

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent {
  @Input() event!: EventData
}
