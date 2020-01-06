import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "../modules/material.module";

import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "../nav/header/header.component";

@NgModule({
  declarations: [MainLayoutComponent, HomeComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule, BrowserModule, MaterialModule]
})
export class PageModule {}
