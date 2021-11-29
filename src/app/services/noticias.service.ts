import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>
    ('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a1ba6f90dcd549578b4ccfd2f2493bd8')
  }
}

