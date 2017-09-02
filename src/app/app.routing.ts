import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { RecipesComponent } from './recipes/recipes.component';
import { DetailsComponent } from "app/recipes/details/details.component";
import { CreateComponent } from "app/recipes/create/create.component";
import { EditComponent } from "app/recipes/edit/edit.component";
import { PlaceholderComponent } from "app/recipes/placeholder/placeholder.component";



const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: PlaceholderComponent},
        {path: 'new', component: CreateComponent},
        {path: 'details/:id', component: DetailsComponent},
        {path: 'edit/:id', component: EditComponent}
    ]},
    { path: '**', redirectTo: '/recipes' }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);