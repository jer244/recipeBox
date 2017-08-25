import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { IndexComponent } from './recipes/index/index.component';
import { DetailsComponent } from './recipes/details/details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeService } from  './recipes/recipe.service';
import { CreateComponent } from './recipes/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailsComponent,
    RecipesComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
