import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './recipes/index/index.component';
import { DetailsComponent } from './recipes/details/details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeService } from  './recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailsComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
