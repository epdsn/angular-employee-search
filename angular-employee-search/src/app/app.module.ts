import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ...environment.providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
