import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralMethodsService {

  constructor(
    private router: Router
  ) { }

  navigateToPage(fullRoute: string) {
    this.router.navigate([fullRoute])
  }

  arraysAreSame(x: Array<[]>, y: Array<[]>, fieldToCompare: string) {
    
    let objectsAreSame = true

    if(x.length != y.length) {
      objectsAreSame = false;
    }

    for(let item of x) {
      let objSame = x[fieldToCompare] == y[fieldToCompare]
      if(!objSame) {
        objectsAreSame = false
        break
      }
    }

    return objectsAreSame;
  }  
}
