import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Input() totalItems!: number;
  @Output() changePageEmit: EventEmitter<number> = new EventEmitter<number>();
  @Input() pageSize!: number;
  @Output() pageSizeChangeEmit: EventEmitter<number> = new EventEmitter<number>();
  availablePageSizes = [6, 10];

  changePage(number: number) {
    this.changePageEmit.emit(number);
  }

  onPageSizeChange(newSize: number) {
    this.pageSize = +newSize;
    this.pageSizeChangeEmit.emit(this.pageSize);
  }
}
