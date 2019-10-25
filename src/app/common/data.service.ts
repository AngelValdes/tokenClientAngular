import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'bearer '
    })
  }
  constructor(private http: HttpClient) {}
  get(url, authorization): Observable<any> {
    this.httpOptions.headers.set('Authorization', authorization)
    return this.http.get<any>(url, this.httpOptions).pipe(
      tap(data => {
        console.log('All: ' + JSON.stringify(data))
      }),
      catchError(this.handleError)
    )
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      // client side error
      errorMessage = `An error occurred: ${err.error.message}`
    } else {
      // server side error
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage) // email, log it, etc
    return throwError(errorMessage)
  }
}
