import { Ingredient } from "app/ingredient";

export class Recipe {
        constructor(
            public title: string,
            public ingredients: string,
            public directions: string,
            public image: string,
            public category?: string
        ){}
}
