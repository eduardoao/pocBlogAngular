import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFakeService } from '../data/datafake.service';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private dataService: DataFakeService) {

   }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }

  deletePost(index: number ) {
    this.dataService.ELEMENT_DATA = [...this.dataService.ELEMENT_DATA.slice(0, index), ...this.dataService.ELEMENT_DATA.slice(index + 1)];
  }

  getCategories() {
    return this.dataService.categories;
  }

  addPost(data: Post) {
    this.dataService.ELEMENT_DATA.push(data);
  }

  dataLength() {
    return this.dataService.ELEMENT_DATA.length;
  }


}
