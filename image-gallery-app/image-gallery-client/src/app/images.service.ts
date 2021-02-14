import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from './gallery/image.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  loadedImages: Image[];

  constructor(private http: HttpClient) { }


fetchImages(): Observable<Image[]> {
  return this.http.get<Image[]>(environment.apiEndpoint +'/images')
     .pipe(
      map(responseData => {
        const postsArray : Image[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key]});
          }
        }
        return postsArray;
      })
     );
}
}