import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-and-filter-bar',
  templateUrl: './search-and-filter-bar.component.html',
  styleUrls: ['./search-and-filter-bar.component.scss']
})
export class SearchAndFilterBarComponent implements OnInit {
  @Input() listState: boolean = false;
  @Input() ascendingState: boolean = false;
  @Output() outputIsList = new EventEmitter<boolean>();
  @Output() outputIsAscending = new EventEmitter<boolean>();
  @Output() searchContent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(isList: boolean): void {
    this.outputIsList.emit(!this.listState);
    console.log('Change display event emitted: ', !this.listState);
  }

  sort(isAscending: boolean) {
    this.outputIsAscending.emit(!this.ascendingState);
    console.log('Sort event emitted: ', !this.ascendingState);
  }

  search(searchInput: HTMLInputElement) {
    this.searchContent.emit(searchInput.value);
    console.log('Search input event emitted: ', searchInput.value);
  }
}
