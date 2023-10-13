import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { MyDirective, MyHighlightDirective } from './parent/my-directive.component';
import { IntToDoublePipe } from './parent/int-to-double.pipe';
import { HighlightDirective } from './parent/highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { CommonModule } from '@angular/common';
import { MyService } from './parent/my-service.component';
import { ObservablesComponent } from './observables/observables.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './httpClient/http-client.component';
import { MyInterceptor, RemoveLastItemInterceptor } from './httpClient/interceptor.service';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    MyHighlightDirective,
    MyDirective,
    IntToDoublePipe,
    IntToDoublePipe,
    HighlightDirective,
    StructuralDirectiveComponent,
    ObservablesComponent,
    HttpComponent,
    TempleteDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor, // Sử dụng Interceptor bạn đã tạo
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RemoveLastItemInterceptor, // Sử dụng Interceptor bạn đã tạo
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
