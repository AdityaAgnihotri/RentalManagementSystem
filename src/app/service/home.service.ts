import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // public url: string = "http://localhost:5555/data";
  // public url: string = "https://s3.ap-south-1.amazonaws.com/json-file/catalog.json";
  public url: string = environment.baseUrl;

  private data: any[];
  private messageSource = new BehaviorSubject("message");
  currentMessage = this.messageSource.asObservable();
  private loading = false;
  
  
  constructor(private http: HttpClient) { }

 loadData() {   // Get Data from the live server
    return this.http.get(this.url).pipe(
      map((res: any) => res.data));
  }


  changeMessage(message: string) { // Subject to subscribe for the data
    this.messageSource.next(message)
  }


  
}
