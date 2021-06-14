import { Component, OnInit } from '@angular/core';
import { GeneralMethodsService } from 'src/app/services/general-methods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private generalMethods: GeneralMethodsService
  ) { }

  ngOnInit() {
  }

  goToPage(fullRoute: string) {
    this.generalMethods.navigateToPage(fullRoute)
  }

}
