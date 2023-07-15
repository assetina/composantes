import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './carte/carte.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  {path:"",component:RechercheComponent },
  {path:"carte",component:CarteComponent },
  {path:"details",component:DetailsComponent },
  {path:"recherche",component:RechercheComponent },
  /*{path:"animaux",component:AnimalComponent },
  {path:"consultations",component:ConsultationComponent },
  {path:"analyses",component:AnalyseComponent },
  {path:"medicaments",component:MedicamentComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
