import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() loadedImages: Image[];
  @Output() searchRequest = new EventEmitter<{searchText: string}>();
  showDropDown : boolean = true;
  searchText : string = '';
  descriptionArray: String[];

  constructor() { }

  ngOnInit(): void {
    this.descriptionArray = this.loadedImages.map((image: Image) => image.description);
  }

  onItemClick(item: string) : void{
    this.searchText = item;
    this.showDropDown = false;
  }

  closeDropDown() : void {
    this.showDropDown = false;
}

  toggleDropDown() : void {
  this.showDropDown = true;
}
onSearch(searchText : string) : void {
  this.searchRequest.emit({searchText:searchText});
}

}
