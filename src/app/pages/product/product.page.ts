import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { IProduct } from 'src/app/interfaces/product';
import { GlobalValuesService } from 'src/app/services/global-values.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})

export class ProductPage implements OnInit {

  currentSku: number
  currentAmount: number = 0
  currentQty: number = 0
  productData: IProduct
  propertyBtns: Array<{name: string, type: 'price' | 'qty' , value: number}> = [
    {
      name: '$100',
      type: 'price',
      value: 100
    },
    {
      name: '$10',
      type: 'price',
      value: 10
    },
    {
      name: '2.2 qty',
      type: 'qty',
      value: 2.2
    },
    {
      name: '9 qty',
      type: 'qty',
      value: 9
    }
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private globalValues: GlobalValuesService
  ) { }

  ngOnInit() {
    this.currentSku = Number(this.activatedRoute.snapshot.paramMap.get('sku'));
  
    this.globalValues.$products.pipe(
      map((products: Array<IProduct>) => products.find(item => item.sku === this.currentSku ))
    ).subscribe((product: IProduct) => this.productData = product)

  }

  calculateValues(type: 'price' | 'qty', $event: any | undefined, value: number | undefined) {
    
    let currentValue: number = $event !== undefined ? Number($event.target.value) : value
    
    if(type === 'price') {
      this.currentAmount = currentValue
      this.currentQty = 0
      this.currentQty = Number((this.currentAmount/this.productData.price).toFixed(2))
    } else {
      this.currentQty = currentValue
      this.currentAmount = 0
      this.currentAmount = Number((this.currentQty*this.productData.price).toFixed(2))
    }
  }

  



}
