import { Component, OnInit } from '@angular/core';
import { GithubService } from './shared/services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  

  constructor() { }

  ngOnInit(): void {
  }
}
