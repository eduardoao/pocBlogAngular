
import { Component, OnInit } from '@angular/core';

import {DataFakeService} from '../data/datafake.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public dataService: DataFakeService) {

   }

  ngOnInit(): void {
  }

}
