import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  // Create methods to make HTTP requests
  getData(url: string): Observable<any> {
    return this.http.get(url, { observe: 'response' }).pipe(
      catchError(error => {
        console.log("Có lỗi rồi !!!!!");
        console.error('Error:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }

  postData(data: any, url: string): Observable<any> {
    return this.http.post(url, data, { observe: 'response' })
    .pipe(
      catchError(error => {
        console.log("Có lỗi rồi !!!!!");
        console.error('Error:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }

  putData(data: any, url: string): Observable<any> {
    return this.http.put(url, data, { observe: 'response' }).pipe(
      catchError(error => {
        console.log("Có lỗi rồi !!!!!");
        console.error('Error:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }

  deleteData(url: string): Observable<any> {
    return this.http.delete(url, { observe: 'response' })
    // .pipe(
    //   catchError(error => {
    //     console.log("Có lỗi rồi !!!!!");
    //     console.error('Error:', error);
    //     return throwError('Something went wrong. Please try again later.');
    //   })
    // );
  }

}
