import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { Category } from "src/app/models/category";

@Component({
  selector: "app-category-menu",
  templateUrl: "./category-menu.component.html",
  styleUrls: ["./category-menu.component.css"]
})
export class CategoryMenuComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  categories: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    });
  }
}
