import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  age!: number;

  constructor() { }

  ngOnInit(): void {
    this.age = this.myAge('03/09/1993');
  }

  public myAge(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth); // mm-dd-yyyy
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

}
