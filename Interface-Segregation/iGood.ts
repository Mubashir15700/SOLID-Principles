namespace interfaceSegregation {
    interface ShapeInterface {
        calculateArea(): number;
    }

    interface ThreeDimensionalShapeInterface {
        calculateArea(): number;
        calculateVolume(): number;
    }

    class Square implements ShapeInterface {
        calculateArea() {
            return 0;
            //...
        }
    }

    class Cuboid implements ThreeDimensionalShapeInterface {
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
