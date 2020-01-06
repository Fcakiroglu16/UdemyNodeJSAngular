import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatButtonModule,
  MatTabsModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatTabsModule],
  exports: [MatToolbarModule, MatButtonModule, MatTabsModule]
})
export class MaterialModule {}
