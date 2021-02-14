import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Image } from '../image.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: Image;
  isEditmode : boolean = false;
  @Output() imageRemoved = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onDelete(id: string) : void {
    this.http
      .get<Image[]>(environment.apiEndpoint +'/delete?id='+ id).subscribe(res => {
      });
      this.imageRemoved.emit();
  }

  onEdit(id: string): void {
    this.isEditmode = true;
  }
  onCancel() : void{
    this.isEditmode = false;
  }
  onSave(imageId:string, editDescription:string) : void{
    const payload = new HttpParams()
    .set('id', imageId)
    .set('description', editDescription);
    this.http.post<string>(environment.apiEndpoint +'/update', payload)
        .subscribe(
          res => {
            console.log(res);
          },
          error => {
            console.log(error);
          }
        );
  }

}
