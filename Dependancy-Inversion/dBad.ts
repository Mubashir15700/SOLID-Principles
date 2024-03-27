const iceCreamFlavors = ['chocolate', 'vanilla'];

class makeIceCream {
    private flavor: string = "";

    constructor(flavor: string) {
        this.flavor = flavor;
    }

    make() {
        if (iceCreamFlavors.indexOf(this.flavor) > -1) {
            console.log('Great success. You now have ice cream.');
        } else {
            console.log('Epic fail. No ice cream for you.');
        }
    }
}

/*
   The makeIceCream class directly depends on the iceCreamFlavors array. Any changes to how 
   flavors are stored or retrieved (e.g., database, API) require modifying this class.
*/
