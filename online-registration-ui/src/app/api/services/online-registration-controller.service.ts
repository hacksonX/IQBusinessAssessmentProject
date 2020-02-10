/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';

/**
 * Online Registration Controller
 */
@Injectable({
  providedIn: 'root',
})
class OnlineRegistrationControllerService extends __BaseService {
  static readonly registerUserUsingPOSTPath = '/api/user/register';
  static readonly getAllRegisteredUsersUsingGETPath = '/api/user/retrieve';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param userDetail userDetail
   * @return OK
   */
  registerUserUsingPOSTResponse(userDetail: User): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userDetail;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/user/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param userDetail userDetail
   * @return OK
   */
  registerUserUsingPOST(userDetail: User): __Observable<boolean> {
    return this.registerUserUsingPOSTResponse(userDetail).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return OK
   */
  getAllRegisteredUsersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/user/retrieve`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllRegisteredUsersUsingGET(): __Observable<Array<User>> {
    return this.getAllRegisteredUsersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }
}

module OnlineRegistrationControllerService {
}

export { OnlineRegistrationControllerService }
