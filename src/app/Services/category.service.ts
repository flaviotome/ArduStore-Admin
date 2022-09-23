import { Observable } from 'rxjs';
import { Category } from './../Models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = 'http://localhost:3000/category';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(this.url + '/' + id);
  }

  deleteCategory(id: string): Observable<Category[]> {
    return this.httpClient.delete<Category[]>(this.url + '/' + id);
  }

  postCategory(newCategory: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.url, newCategory);
  }
}
