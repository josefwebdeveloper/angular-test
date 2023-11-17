import { Component, Input } from '@angular/core';
import { EventData } from "../../models/events.model";

@Component({
  selector: 'app-tile-event',
  templateUrl: './tile-event.component.html',
  styleUrls: ['./tile-event.component.scss']
})
export class TileEventComponent {
  @Input() event!: EventData;
}
