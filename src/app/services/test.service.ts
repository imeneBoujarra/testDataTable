import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url ="http://localhost:8080/" 
  constructor(private http : HttpClient) { }



  getData (file : any): Observable<any>
  {  const formData = new FormData();  
    // Store form name as "file" with file data
    formData.append("file", file,file.name);
    return this.http.post<Map<string, string>[]>(this.url+'getData' , formData);
  }

  getAllAttributes (file : any): Observable<any>
  { const formData = new FormData();  
    // Store form name as "file" with file data
    formData.append("file", file,file.name);
    return this.http.post<string[]>(this.url+'getAttributes' ,formData);
  }



}
