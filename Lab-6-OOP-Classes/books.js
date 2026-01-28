class Book {
    constructor(title, author, numChapters, numPages, publisher, numCopies) {
        this.title = title;
        this.author = author;
        this.numChapters = numChapters;
        this.numPages = numPages;
        this.publisher = publisher;
        this.numCopies = numCopies;
    }
}

class Box {
    constructor(height, width, length, material) {
        this.height = height;
        this.width = width;
        this.length = length;
        this.material = material;
        this.content = []; 
        this.numOfBooks = 0;
        this.volume = height * width * length;
    }


    numOfBooks() {
        return this.content.length;
    }

    addBook(title, author, numChapters, numPages, publisher, numCopies) {
        const newBook = new Book(title, author, numChapters, numPages, publisher, numCopies);
        this.content.push(newBook);
        this.numOfBooks++;
        console.log(`Added: ${title}`);
    }

    deleteBook(title) {
        this.content = this.content.filter(book => book.title !== title);
        this.numOfBooks = this.content.length;
        console.log(`Deleted book have title: ${title}`);
    }

    toString() {
        return `Box: ${this.width}x${this.height}x${this.length}. Contains ${this.numOfBooks} books.`;
    }

    valueOf() {
        return this.numOfBooks;
    }
}


const box1 = new Box(10, 10, 10, "web");
const box2 = new Box(20, 20, 20, "basics");

box1.addBook("JS", "mo", 10, 300, "library", 5);
box1.addBook("CSS", "salah", 8, 250, "library", 2);
box1.addBook("HTML", "ahmed", 5, 100, "library", 10);

box2.addBook("Data Structures", "ali", 12, 400, "library", 3);
box2.addBook("Algorithms", "salma", 15, 500, "library", 4);

box1.deleteBook("HTML");

console.log(box1.toString()); 
console.log(box1.volume);
console.log(box2.toString()); 

console.log("Total books in box:", box1.valueOf() + box2.valueOf());