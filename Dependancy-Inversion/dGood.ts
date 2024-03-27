namespace dependancyInversion {
    interface FlavorProvider {
        getAvailableFlavors(): string[];
    }

    class InMemoryFlavorProvider implements FlavorProvider {
        getAvailableFlavors(): string[] {
            return ['chocolate', 'vanilla'];
        }
    }

    class makeIceCream {
        private flavor: string = "";

        constructor(private flavorProvider: FlavorProvider) { }

        make() {
            const flavors = this.flavorProvider.getAvailableFlavors();
            if (flavors.indexOf(this.flavor) > -1) {
                console.log('Great success. You now have ice cream.');
            } else {
                console.log('Epic fail. No ice cream for you.');
            }
        }
    }

    // Usage
    const flavorProvider = new InMemoryFlavorProvider();
    const iceCreamMaker = new makeIceCream(flavorProvider);
    iceCreamMaker.make();
}