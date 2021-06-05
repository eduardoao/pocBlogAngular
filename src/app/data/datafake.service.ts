import {Injectable} from '@angular/core';
import {Post} from '../model/Post';
import {Observable, of} from 'rxjs';

@Injectable()
export class DataFakeService {

  ELEMENT_DATA: Post[] = [
    {position: 0, title: 'Post One', category: 'Web Development', date_posted: new Date(), body: 'Body 1', image: 'src="./../../assets/image/angularjs-icon-1.jpg'},
    {position: 1, title: 'Post Two', category: 'Android Development', date_posted: new Date(), body: 'Body 2', image: 'src="./../../assets/image/angularjs-icon-1.jpg'},
    {position: 2, title: 'Post Three', category: 'IOS Development', date_posted: new Date(), body: 'Body 3', image: 'src="./../../assets/image/angularjs-icon-1.jpg'},
    {position: 3, title: 'Post Four', category: 'Android Development', date_posted: new Date(), body: 'Body 4', image: 'src="./../../assets/image/angularjs-icon-1.jpg'},
    {position: 4, title: 'Post Five', category: 'IOS Development', date_posted: new Date(), body: 'Body 5', image: 'src="./../../assets/image/angularjs-icon-1.jpg'},
    {position: 5, title: 'Post Six', category: 'Web Development', date_posted: new Date(), body: 'Body 6', image: 'src="./../../assets/image/angularjs-icon-1.jpg'},
  ];
  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];

  constructor() {
  }

  getData(): Observable<Post[]> {
    return of<Post[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  addPost(data: Post) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index: number ) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
