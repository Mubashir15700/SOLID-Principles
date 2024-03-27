namespace interfaceSegregation {
    interface ShapeInterface {
        calculateArea(): number;
        calculateVolume(): number;
    }

    class Square implements ShapeInterface {
        calculateArea() {
            return 0;
            //...
        }
        calculateVolume() {
            return 0;
            //...
        }
    }

    class Cuboid implements ShapeInterface {
        calculateArea() {
            return 0;
            //...
        }
        calculateVolume() {
            return 0;
            //...
        }
    }
}

/*
   you cannot calculate the volume of a square or rectangle. Because the class implements the 
   interface, you need to define all methods, even the ones you won’t use or need.
   
   To fix this, you would need to segregate the interface.
*/
