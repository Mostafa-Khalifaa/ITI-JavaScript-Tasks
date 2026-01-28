class Shape {
    static count = 0;

    constructor() {
        Shape.count++;
    }

    static getCount() {
        return Shape.count;
    }
    toString() {
        return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(); 
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const rect1 = new Rectangle(10, 20);
const square1 = new Square(5);
const circle1 = new Circle(3);

console.log("Rectangle:", rect1.toString());
console.log("Square :", square1.toString());
console.log("Total Shapes:", Shape.getCount());
//console.log(rect1);
