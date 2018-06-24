import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // response$:Object;

  constructor(public httpClientModule: HttpClient) { 
    console.log('data service connected');
  }

  getPosts(){
    return this.httpClientModule.get('https://jsonplaceholder.typicode.com/posts')
    // .subscribe(data => this.response$ = data );
  }

}
