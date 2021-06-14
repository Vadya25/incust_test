import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class GlobalValuesService {

  $products: Observable<Array<IProduct>>

  constructor() { }
}
