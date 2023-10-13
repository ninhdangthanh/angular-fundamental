import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyObservableService {
  myObservable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.complete();
    observer.next(3);
  });
}

@Injectable({
  providedIn: 'root'
})
export class MyObservableServiceFrom {
  myObservableFrom = from([6, 7, 8, 9]);
}


@Injectable({
  providedIn: 'root',
})
export class ApiObservableCreatingService {
  constructor(private http: HttpClient) {}

  get(endpoint: string): Observable<any> {
    return this.http.get(endpoint);
  }
}
