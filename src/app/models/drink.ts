export class Drink {
    id: string;
    name: string;
    ownerId: string;
    alcoholByVolume: number;
    volume: number;
    subDrinks: SubDrink[];
    isComposedDrink: boolean;
    calculatedVolume: number;
    calculatedAlcoholByVolume: number;
}

export class SubDrink {
    id: string;
    drinkId: string;
    name: string;
    alcoholByVolume: number;
}
