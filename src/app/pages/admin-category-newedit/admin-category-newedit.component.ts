import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Category } from "src/app/models/category";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-admin-category-newedit",
  templateUrl: "./admin-category-newedit.component.html",
  styleUrls: ["./admin-category-newedit.component.css"]
})
export class AdminCategoryNeweditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {}
  categoryId: string;
  category: Category;
  categoryForm: FormGroup;
  title: string;
  btnText: string;
  type: string;

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get("id");

    if (this.categoryId == null) {
      this.title = "Kategori ekle";
      this.btnText = "Ekle";
      this.type = "add";
    }

    this.categoryForm = new FormGroup({
      name: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      if (this.type == "add") {
        this.categoryService
          .addCategory(this.categoryForm.value)
          .subscribe(result => {
            this.router.navigateByUrl("/admin");
          });
      } else {
      }
    }
  }
}
