import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlBase = "http://localhost:8081/blog-app/posts";


  constructor(private httpPost: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.httpPost.get<Post[]>(this.urlBase);
  }
}