import { Ingredient } from "app/ingredient";

export class Recipe {
        constructor(
            public title: string,
            public ingredients: Ingredient[],
            public servingSize: number,
            public image: string,
            public category?: string
        ){}
}
