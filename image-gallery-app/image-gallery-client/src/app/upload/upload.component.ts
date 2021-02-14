import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  image: File;
  description : string;
  uploadMessageStatus: string;
  error: string = null;
  uploadImageForm: FormGroup;


  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.uploadImageForm = this.fb.group({
      description: [null, [Validators.required, Validators.maxLength(200)]],
      image: [null, Validators.required]
    })
  }

  onFileAdded(fileData:{image: File}): void {
    this.image = fileData.image;
    this.uploadImageForm.patchValue({
      image: this.image,
    });
  }

  onUpload(description : string): void {
    this.reset();
    const uploadData = new FormData();
    uploadData.append('image', this.image);
    uploadData.append('description', description);
    this.http.post<string>(environment.apiEndpoint +'/upload', uploadData)
        .subscribe(
          res => {
            this.uploadMessageStatus = res;
          },
          error => {
            this.error = error.error.message;
          }
        );
    }

  reset(): void {
    this.uploadMessageStatus= null;
    this.error = null;
  }
}
