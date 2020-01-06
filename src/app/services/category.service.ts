import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Category } from "../models/category";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private httpclient: HttpClient) {}
  apiUrl: string = `${environment.baseUrl}/category`;

  addCategory(category: Category) {
    return this.httpclient.post<any>(this.apiUrl, category);
  }
}
