import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:  'search', component: SearchComponent},
  {path: 'search-results', component: SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
