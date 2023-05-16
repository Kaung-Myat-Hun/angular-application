import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  httpHeaders: HttpHeaders = new HttpHeaders({
    accept: 'application/json',
    Authorization: 'hello',
  });
  GetData(url: string) {
    return this.http.get(url);
  }
  PostData(url: string, body: any) {
    return this.http.post(url, body);
  }
}
