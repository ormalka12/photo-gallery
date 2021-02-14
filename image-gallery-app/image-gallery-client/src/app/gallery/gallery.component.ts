import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './image.model';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  loadedImages: Image[];
  isFetching: boolean;

  constructor(private http: HttpClient, private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.fetchImages();
  }

  private fetchImages(): void {
    this.isFetching = true;
    this.imagesService.fetchImages().subscribe((images: Image[]) => {
      this.loadedImages = images;
      this.isFetching = false;
    });
  }

  onImageRemoved(): void {
    this.fetchImages();
  }

  onSearch(searchData: {searchText: string}): void { 
      const img = this.loadedImages.find((image: Image) => {
        return image.description === searchData.searchText
      });
      this.loadedImages = [img];
  }
}
