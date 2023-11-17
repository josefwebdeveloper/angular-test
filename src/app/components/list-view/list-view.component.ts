import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EventData} from "../../models/events.model";
import {SortDirection} from "../../models/dashboard.model";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  @Input() currentItems: EventData[] = [];
  @Output() updateEmitter = new EventEmitter<EventData>();
  @Output() toggleSortDirectionEmitter = new EventEmitter<string>();
  @Input() sortDirection: string = '';

  update(item: EventData) {
    this.updateEmitter.emit(item);
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === SortDirection.Ascending ? SortDirection.Descending : SortDirection.Ascending;
     this.toggleSortDirectionEmitter.emit(this.sortDirection);
  }
}
