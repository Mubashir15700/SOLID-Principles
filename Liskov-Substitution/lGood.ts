class Shape {
    protected color: string = "";
    protected width: number = 0;
    protected height: number = 0;
    protected side: number = 0;

    setColor(color: string) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Rectangle extends Shape {
    setWidth(width: number) {
        this.width = width;
    }
    setHeight(height: number) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    setSide(side: number) {
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

// superclass
let shape = new Shape();
shape.setColor('red');
console.log(shape.getColor()); // red

// subclass
let rectangle = new Rectangle();
rectangle.setColor('red');
console.log(rectangle.getColor()); // red

// subclass
let square = new Square();
square.setColor('red');
console.log(square.getColor()); // red
