import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { EventData } from "../../models/events.model";
import { View } from "../../models/dashboard.model";
import { IAppState } from "../../store/state/app.state";
import { Store } from "@ngrx/store";
import { DashboardSelectors } from "../../store/selectors/dasboard.selector";
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnChanges {

  @Input() events!: EventData[]
  @Output() updateEvent = new EventEmitter<EventData>();
  searchControl: FormControl = this.fb.control('');
  protected readonly View = View;
  pageSize = 6;
  currentPage: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;
  currentItems: EventData[] = [];
  viewMode!: View;
  sortDirection: string = '';


  constructor(
    private store: Store<IAppState>,
    private fb: FormBuilder
  ) {
    this.store.select(DashboardSelectors.selectView).subscribe((data) => {
      this.viewMode = data;
    })
  }

  ngOnChanges() {
    this.updateData();
  }

  onPageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.currentPage = 1; // Reset to first page when page size changes
    this.updateData();
  }
  toggleSortDirection(direction:string) {
    this.sortDirection = direction
    this.updateData();
  }
  getItems(page: number, searchQuery: string = '', sortDirection: string): EventData[] {
    let filteredItems = this.events.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (sortDirection) {
      filteredItems = filteredItems.sort((a, b) => {
        if (a.name < b.name) return sortDirection === 'asc' ? -1 : 1;
        if (a.name > b.name) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
    const startIndex = (page - 1) * this.pageSize;
    return filteredItems.slice(startIndex, startIndex + this.pageSize);
  }

  getTotalPages(searchQuery: string = ''): number {
    const filteredItems = this.events.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return Math.ceil(filteredItems.length / this.pageSize);
  }

  getTotalItems(searchQuery: string = ''): number {
    return this.events.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())).length;
  }

  updateData() {
    this.currentItems = this.getItems(this.currentPage, this.searchControl.value, this.sortDirection);
    this.totalPages = this.getTotalPages(this.searchControl.value);
    this.totalItems = this.getTotalItems(this.searchControl.value);
  }

  searchControlChange(value: any) {
    this.currentPage = 1;
    this.updateData();
  }

  changePage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.updateData();
    }
  }


  updateEmitter(event: EventData) {
    this.updateEvent.emit(event);
  }
}
