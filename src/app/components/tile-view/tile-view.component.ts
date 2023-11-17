import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventData } from "../../models/events.model";

@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.scss']
})
export class TileViewComponent {
  @Input() currentItems!: EventData[]
  @Output() updateEmitter = new EventEmitter<EventData>();

  update(item: EventData) {
    this.updateEmitter.emit(item);
  }
}
