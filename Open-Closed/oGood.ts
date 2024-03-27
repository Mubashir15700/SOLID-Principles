namespace IceCreamNamespace {
    type StringArray = string[];

    const iceCreamFlavors = ['chocolate', 'vanilla'];

    class makeIceCream {
        flavor: string;

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

    class addIceCream {
        flavor: string;

        constructor(flavor: string) {
            this.flavor = flavor;
        }
        add() {
            iceCreamFlavors.push(this.flavor);
        }
    }

    /*
       Here, we've added a new class — addIceCream – to handle addition to the iceCreamFlavors array 
       using the add() method. This means your code is closed to modification but open to an extension 
       because you can add new flavors without directly affecting the array.
    */
}
