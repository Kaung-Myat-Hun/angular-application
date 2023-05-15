import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  GetData(url: string) {
    return this.http.get(url);
  }
  PostData(url: string, body: any) {
    return this.http.post(url, body);
  }
}
