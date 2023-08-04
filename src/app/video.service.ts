import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(public http:HttpClient) { }

  uploadVideo(file: File): Observable<any> {
   const formdata = new FormData();
   formdata.append("file",file,file.name);
    return this.http.post("http://localhost:8090/api/video/upload",formdata);
  }

}
