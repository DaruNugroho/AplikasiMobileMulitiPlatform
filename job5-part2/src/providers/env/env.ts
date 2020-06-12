import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EnvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnvProvider {
  API_URL = 'https://ecommerce.jaroji.web.id/api/';
  constructor(public http: HttpClient) {}
}
