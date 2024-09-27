import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeproduitComponent} from "./component/homeproduit/homeproduit.component";
import {ProduitComponent} from "./component/produit/produit.component";
import {AuthGuard} from "./auth/authguard.guard";

const routes: Routes = [

  {
    path: "home",
    component: HomeproduitComponent
  },
  {
    path: "produits",
    component: ProduitComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
