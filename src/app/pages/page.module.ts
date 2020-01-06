import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../modules/material.module";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

//layouts
import { AdminLayoutComponent } from "../layouts/admin-layout/admin-layout.component";
import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";
//components
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "../nav/header/header.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminCategoryNeweditComponent } from "./admin-category-newedit/admin-category-newedit.component";

@NgModule({
  declarations: [
    MainLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    HeaderComponent,
    AdminHomeComponent,
    AdminCategoryNeweditComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PageModule {}
