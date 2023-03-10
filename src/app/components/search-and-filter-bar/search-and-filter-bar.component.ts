import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-and-filter-bar',
  templateUrl: './search-and-filter-bar.component.html',
  styleUrls: ['./search-and-filter-bar.component.scss']
})
export class SearchAndFilterBarComponent implements OnInit {
  @Input() listState: boolean = false;
  @Output() outputIsList = new EventEmitter<null>();
  @Output() outputIsAscending = new EventEmitter<null>();
  @Output() searchContent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(): void {
    this.outputIsList.emit();
    console.log('Change display event emitted');
  }

  sort() {
    this.outputIsAscending.emit();
    console.log('Sort event emitted');
  }

  search(searchInput: HTMLInputElement) {
    this.searchContent.emit(searchInput.value);
    console.log('Search input event emitted: ', searchInput.value);
  }
}
