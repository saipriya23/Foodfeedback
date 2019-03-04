import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  setItem(key:string,data:string):void{
    localStorage.setItem(key,data);
  }
  getItem(key:string):string{
    return localStorage.getItem(key);
  }
}
