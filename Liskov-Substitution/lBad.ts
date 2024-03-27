namespace liskovSubstitution {
    class Rectangle {
        protected width: number = 0;
        protected height: number = 0;
        
        setWidth(width: number) {
            this.width = width;
        }

        setHeight(height: number) {
            this.height = height;
        }

        setColor(color: string) {
            // ...
        }

        getArea() {
            return this.width * this.height;
        }
    }

    class Square extends Rectangle {
        setWidth(width: number) {
            this.width = width;
            this.height = width;
        }
        setHeight(height: number) {
            this.width = height;
            this.height = height;
        }
    }

    /*
       According to the LSP, you want the objects of your subclasses to behave the same way as the 
       objects of your superclass. Meaning if you replace the Rectangle with Square, everything 
       should still work well
    
       This breaks the LSP. To fix this, there should be a general class for all shapes that will hold 
       all generic methods that you want the objects of your subclasses to have access to. 
       Then for individual methods, you create an individual class for rectangle and square.
    */
}