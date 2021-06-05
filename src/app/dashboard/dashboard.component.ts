import {Component} from '@angular/core';
import {DataFakeService} from '../data/datafake.service';
import {Post} from '../model/Post';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import { AuthService } from '../auth.service';

import {PostDialogComponent} from '../post-dialog/post-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public auth: AuthService, public dialog: MatDialog, private postServiceService: PostServiceService) {
  }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = this.postServiceService.connect();

  deletePost(id: number) {
    if (this.auth.isAuthenticated()) {
      this.postServiceService.deletePost(id);
      this.dataSource = this.postServiceService.connect();
    } else {
      alert('Login in Before');
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '80%',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.postServiceService.addPost(result.data);
      this.dataSource = this.postServiceService.connect();
    });
  }
}

export class PostDataSource extends DataSource<any> {
  [x: string]: any;
  constructor(private dataService: DataFakeService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
