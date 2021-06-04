import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../Post';
import { PostServiceService } from '../services/post-service.service';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {


  constructor(private postServiceService: PostServiceService) {
    this.LoandPost();
  }

  ngOnInit(): void {
  }

  dataSource: Post[] =[];

  public LoandPost(){
  this.postServiceService.connect().subscribe(p => {
    this.dataSource = p
 });
}
}
