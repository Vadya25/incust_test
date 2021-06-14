import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  setData(key: string, data: any): void {
    this.storage.set(key, data)
  }

  getData(key: string): Promise<any> {
    return this.storage.get(key)
  }

  removeItem(key: string): void {
    this.storage.remove(key)
  }

  removeAllItem(): void {
    this.storage.clear()
  }

}
