import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Book } from "src/app/models/book";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}
  book: Book = new Book();
  bookId: string;
  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get("id");

    this.bookService.getBookById(this.bookId).subscribe(result => {
      this.book = result;
    });
  }
}
