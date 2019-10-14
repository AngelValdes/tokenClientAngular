import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private http: HttpClient) { }

  GetToken(): Observable<any> {
    return this.http.post<any>('url', data, httpOptions)
      .pipe(catchError(this.handleError('Get token', data)))

  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message + ' from handleError.')
  }
}
