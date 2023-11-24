import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // private baseUrl = '/phpmailer/';
  private baseUrl = environment.apiUrl;



  constructor(private http: HttpClient) {}

  sendEmailWithAttachment(formData: FormData): Observable<any> {
    console.log('FormData en EmailService:', formData);
    return this.http.post(this.baseUrl, formData);
  }
}
