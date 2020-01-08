import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatButtonModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule,
  MatIconModule,
  MatAutocompleteModule,
  MatCardModule,
  MatListModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCardModule,
    MatListModule
  ]
})
export class MaterialModule {}
