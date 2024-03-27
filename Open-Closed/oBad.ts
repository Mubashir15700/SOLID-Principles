namespace IceCreamNamespace {

    type StringArray = string[];

    const iceCreamFlavors: StringArray = ['chocolate', 'vanilla'];

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

    /* The code above fails the OCP principle. Because the code above is not open to an extension, 
       meaning for you to add new flavors, you would need to directly edit the iceCreamFlavors array. 
       This means that the code is no longer closed to modification.
    */
}