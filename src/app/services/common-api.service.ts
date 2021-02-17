import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor(private http: HttpClient) { }
  baseurl = "http://3.139.133.199:8081/"
  public get(url, requestType) {
    return this.http.get(this.baseurl +  url, { responseType: requestType });
  }

  public post(url, body, requestType) {
    return this.http.post(this.baseurl + url, body,{ responseType: requestType });
  }

  public put(url, body, requestType) {
    return this.http.put(this.baseurl + url, body,{ responseType: requestType });
  }
}
