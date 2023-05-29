import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FailedPageComponent } from './failed-page/failed-page.component';
import { HeaderChild1Component } from './header-child1/header-child1.component';
import { HeaderChild2Component } from './header-child2/header-child2.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home/:id',
  },
  {
    component:HeaderComponent,
    path:'header',
    children:[
      {
        path:'child1',
        component:HeaderChild1Component
      },
      {
        path:'child2',
        component:HeaderChild2Component
      },
    ]
  },
  {
    component:HeaderComponent,
    path:''
  },
  {
    component:FailedPageComponent,
    path:'**'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
