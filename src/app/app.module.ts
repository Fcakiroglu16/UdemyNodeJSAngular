import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageModule } from "./pages/page.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHanlingInterceptorService } from "./services/error-hanling-interceptor.service";

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, PageModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHanlingInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
