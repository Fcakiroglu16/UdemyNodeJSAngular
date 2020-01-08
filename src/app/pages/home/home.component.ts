import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Book } from "src/app/models/book";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private bookService: BookService) {}
  books: Book[];
  ngOnInit() {
    this.bookService.getBooks().subscribe(result => {
      this.books = result;
    });
  }
}
