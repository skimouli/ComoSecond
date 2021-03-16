import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Resource {
}
@Injectable({providedIn: "root"})
export class ResourceService {

  constructor(private httpClient: HttpClient) { }

  creat<T extends Resource>(data: T, url: string, option?: any): Observable<any> {
    return this.httpClient.post<T>(url, data, option);
  }

  fetch<T extends Resource>(url: string, option?: any): Observable<any> {
    return this.httpClient.get<T>(url, option);
  }
  update<T extends Resource>(data: T, url: string, option?: any): Observable<any> {
    return this.httpClient.put<T>(url, data, option);
  }

  updateWithOutBody<T extends Resource>(url: string, option?: any): Observable<any> {

    return this.httpClient.put<T>(url, option);
  }





  delete<T extends Resource>(url: string, option?: any): Observable<any> {
    return this.httpClient.delete<T>(url, option);
  }
}
