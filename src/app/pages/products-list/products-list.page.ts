import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { map } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { GlobalValuesService } from 'src/app/services/global-values.service';
import { GeneralMethodsService } from 'src/app/services/general-methods.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {

  storageDataKey: string = 'foundProducts'
  storageSearchValueKey: string = 'searchValue'
  $products: Observable<Array<IProduct>>
  productsToShow: Array<IProduct>
  searchValue: string = ''
  private readonly dataUrl: string =  "../../../assets/data.json"

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private globalValues: GlobalValuesService,
    private generalMethods: GeneralMethodsService
  ) { }

  ngOnInit() {
    this.loadData()
  }

  loadData(): void {

    this.$products = this.http.get(this.dataUrl) as Observable<Array<IProduct>>
    this.globalValues.$products = this.$products

    this.storageService.getData(this.storageDataKey)
      .then((storedData: Array<IProduct>) => {
        
        if(storedData != null && storedData.length !== 0) {
          this.storageService.getData(this.storageSearchValueKey)
            .then(storedSearchValue => {
              this.searchValue = storedSearchValue
              this.productsToShow = storedData
            })
            
        } else {
          this.$products.subscribe((items: Array<IProduct>) => this.productsToShow = items)
        }
      })
  }

  filterData(event: any): void {
    const searchValue = event.detail.value.toLowerCase()
    
    this.$products.pipe(
      map((items: Array<IProduct>) => items.filter(item => item.name.toLowerCase().includes(searchValue)))
    ).subscribe((items: Array<IProduct>) => {
      this.productsToShow = items
      this.storeFoundData()
    })

  }

  storeFoundData(): void {

    if(this.searchValue !== '' && this.productsToShow.length != 0) {
      this.storageService.setData(this.storageDataKey, this.productsToShow)
      this.storageService.setData(this.storageSearchValueKey, this.searchValue)
    } else {
      this.storageService.removeAllItem()
    }

  }

  navigateToPage(route: string): void {
   this.generalMethods.navigateToPage(route)
  }

}
