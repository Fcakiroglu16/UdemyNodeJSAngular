import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [MainLayoutComponent, HomeComponent],
  imports: [CommonModule, AppRoutingModule, BrowserModule]
})
export class PageModule {}
