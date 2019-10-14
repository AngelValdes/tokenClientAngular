import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  apiUrl = 'http://dev-api.dadeschools.net/token'
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
  data = 'grant_type=password&username=211630&password=Logit@10&client_id=JS&client_secret=secret'
  constructor(private http: HttpClient) {}

  GetToken(): Observable<any> {
    return this.http.post<any>(this.apiUrl, this.data, this.httpOptions).pipe(
      tap(
        (data) => {
        // console.log('All: ' + JSON.stringify(data))
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
