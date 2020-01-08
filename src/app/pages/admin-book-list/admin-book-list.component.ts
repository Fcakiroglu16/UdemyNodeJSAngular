import { Component, OnInit, ViewChild } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Book } from "src/app/models/book";
import { MatTableDataSource, MatPaginator } from "@angular/material";

@Component({
  selector: "app-admin-book-list",
  templateUrl: "./admin-book-list.component.html",
  styleUrls: ["./admin-book-list.component.css"]
})
export class AdminBookListComponent implements OnInit {
  constructor(private bookService: BookService) {}
  books: Book[];
  datasource;
  displayedColumns: string[] = [
    "no",
    "picture",
    "title",
    "author",
    "price",
    "stock",
    "categoryName",
    "action"
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.bookService.getBooks().subscribe(result => {
      this.books = result;
      this.books.forEach((book, index) => {
        this.books[index]["no"] = index + 1;
      });

      this.datasource = new MatTableDataSource<Book>(this.books);
      this.datasource.paginator = this.paginator;
    });
  }
}
