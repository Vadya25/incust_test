import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class GlobalValuesService {

  $products: Observable<Array<Product>>

  constructor() { }
}
