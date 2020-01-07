import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Book } from "../models/book";
@Injectable({
  providedIn: "root"
})
export class BookService {
  apiUrl: string = `${environment.baseUrl}/book`;
  constructor(private httpClient: HttpClient) {}

  addBook(book: Book) {
    console.log(book);
    return this.httpClient.post<any>(this.apiUrl, book);
  }

  saveBookImage(image) {
    return this.httpClient.post<any>(`${this.apiUrl}/saveImage`, image);
  }
}
