// Rectangle class definition  
class Rectangle {  
    constructor(width, height) {  
        // Ensure width and height are positive integers  
        if (width <= 0 || height <= 0 || !Number.isInteger(width) || !Number.isInteger(height)) {  
            throw new Error("Width and height must be positive integers.");  
        }  
        this._width = width;  // Private variable for width  
        this._height = height; // Private variable for height  
    }  

    // Getter for width  
    get width() {  
        return this._width;  
    }  

    // Getter for height  
    get height() {  
        return this._height;  
    }  

    // Method to calculate area  
    getArea() {  
        return this.width * this.height;  
    }  
}  

// Square class that extends Rectangle  
class Square extends Rectangle {  
    constructor(side) {  
        // Ensure side is a positive integer  
        if (side <= 0 || !Number.isInteger(side)) {  
            throw new Error("Side must be a positive integer.");  
        }  
        super(side, side); // Call the parent constructor with both width and height as side  
    }  

    // Method to calculate perimeter  
    getPerimeter() {  
        return 4 * this.width;  // Or 4 * this.height (both are the same for squares)  
    }  
}  

// Do not change the code below this line  
window.Rectangle = Rectangle;  
window.Square = Square;