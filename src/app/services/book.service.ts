import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Book } from "../models/book";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class BookService {
  apiUrl: string = `${environment.baseUrl}/book`;
  constructor(private httpClient: HttpClient) {}

  getBooks() {
    return this.httpClient
      .get<any>(this.apiUrl)
      .pipe(map(result => result.data));
  }
  getBookById(id: string) {
    return this.httpClient
      .get<any>(`${this.apiUrl}/${id}`)
      .pipe(map(result => result.data));
  }

  addBook(book: Book) {
    console.log(book);
    return this.httpClient.post<any>(this.apiUrl, book);
  }

  updateBook(bookId: string, book: Book) {
    return this.httpClient.put<any>(`${this.apiUrl}/${bookId}`, book);
  }

  saveBookImage(image) {
    return this.httpClient.post<any>(`${this.apiUrl}/saveImage`, image);
  }
}
