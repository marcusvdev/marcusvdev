import { Component, OnDestroy, OnInit } from '@angular/core';
import { repos } from 'src/app/shared/models/repositories';
import { GithubService } from 'src/app/shared/services/github.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  userName: string = "marcusvdev";
  repos: repos[] = [];
  errorMessage: any;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getRepos(this.userName)
      .subscribe({
        next: (n) => this.repos = n,
        error: (e) => this.errorMessage = e,
        complete: () => console.info('complete')
      });
  }

}
