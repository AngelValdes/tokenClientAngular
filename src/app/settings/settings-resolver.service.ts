import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { ConfigService } from '../config/config.service'

@Injectable({
  providedIn: 'root'
})
export class SettingsResolver implements Resolve<any> {
  constructor(private configService: ConfigService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.configService.getConfig()
  }
}
