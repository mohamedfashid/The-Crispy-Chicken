import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NutritionComponent } from './pages/nutrition/nutrition.component';
import { HalalPolicyComponent } from './pages/halal-policy/halal-policy.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';

const routes: Routes = [
  {
    path : "",
    redirectTo : "home",
    pathMatch: 'full' 
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "services/franchise",
    component : FranchiseComponent
  },
  {
    path : "help/faq",
    component : FaqComponent
  },
  {
    path : "contactus",
    component : ContactComponent
  },
  {
    path : "help/T&C",
    component : TermsComponent
  },
  {
    path : "ourfood/nutrition_facts",
    component : NutritionComponent
  },
  {
    path : "ourfood/halal_policy",
    component : HalalPolicyComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
