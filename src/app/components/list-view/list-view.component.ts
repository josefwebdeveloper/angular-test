import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventData } from "../../models/events.model";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  @Input() currentItems: EventData[] = [];
  @Output() updateEmitter = new EventEmitter<EventData>();

  update(item: EventData) {
    this.updateEmitter.emit(item);
  }
}
