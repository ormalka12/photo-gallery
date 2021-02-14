import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './gallery/search/search.component';
import { MatButtonModule } from '@angular/material/button';
import { UploadComponent } from './upload/upload.component';
import { ProgressComponent } from './upload/drag-and-drop/progress/progress.component';
import { DragAndDropComponent } from './upload/drag-and-drop/drag-and-drop.component';
import { DndDirective } from './direcitves/dnd.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './gallery/image/image.component';
import { SpinnerComponent } from './gallery/spinner/spinner.component';
import { FilterPipe } from './gallery/pipes/filter.pipe';
import { HighlightDirective } from './direcitves/highlight.directive'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    UploadComponent,
    ProgressComponent,
    DragAndDropComponent,
    DndDirective,
    GalleryComponent,
    ImageComponent,
    SpinnerComponent,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
