import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {sticky} from '../stickySchema'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StickyserviceService {

  constructor(private http:HttpClient) { }

  getAllSticky():Observable<sticky>{
    var headers = new HttpHeaders().set('content-type','application/json').set('Access-Control-Allow-Origin', '*');
    return this.http.get<sticky>("http://localhost:3000/task/allSticky")
  }

  deleteSticky(id:any){
    var headers = new HttpHeaders().set('content-type','application/json').set('Access-Control-Allow-Origin', '*');
    return this.http.delete("http://localhost:3000/task/deleteSticky/"+id).subscribe()
  }

  incrementLikes(id:any){
    var headers = new HttpHeaders().set('content-type','application/json').set('Access-Control-Allow-Origin', '*');
    return this.http.patch("http://localhost:3000/task//incrementLikes/"+id,{}).subscribe()
  }

}
