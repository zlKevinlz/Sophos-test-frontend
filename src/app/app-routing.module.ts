import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';

const routes: Routes = [
  {
    path: 'characters', component: ListCharactersComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
