"use strict";
// задание 1

let myNumber;
while (true) {
myNumber = +prompt ('Введите число от 0 до 999');

if (typeof myNumber != "number" || isNaN(myNumber)) {
    alert ('Не число');
    continue;
  };
if (!Number.isInteger(myNumber)) {
    alert ('Число не целое');
    continue;
  }; 
if (myNumber < 0 || myNumber > 999) {
    alert ('Число не в заданном диапазоне');
    continue;
}
  break;
}

let numberObj = {};
let arr = [];
for (let value of String(myNumber)) {
    arr.unshift (value);
};
numberObj.units = +arr[0];
numberObj.tens = +arr[1];
numberObj.hundreds = +arr[2];
for (let value in numberObj) {
    if (isNaN(numberObj[value])) {
        numberObj[value] = 0;
    };
}
console.log (numberObj);

//Задание 1.1
//es 5
let addDiscount = {
    make25PercentDiscount: function (discouunt) {
        this.price = this.price - (this.price / 100 * discouunt)  
    }
};

function Product (name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype = addDiscount;

const product1 = new Product ('TV', 100);
product1.make25PercentDiscount (25);
console.log (product1);

//es6
class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;   
    }

    make25PercentDiscount(discouunt) {
        this.price = this.price - (this.price / 100 * discouunt)
    }
}
const product1 = new Product ('TV', 100);
product1.make25PercentDiscount (25);
console.log (product1);


//Задание 1.2
//es 5
function Post (author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

function AttachedPost (author, text, date) {
    Post.call (this, author, text, date);
    this.highlighted = false; 
}

Post.prototype.edit = function(newText) {
    this.text = newText;
};
AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};

const post1 = new Post ('Artem', 'Hello world', '03.11.2020');
post1.edit ('Good morning world');
const attachedPost1 = new AttachedPost ('Artem', 'Hello world', '03.11.2020');
attachedPost1.makeTextHighlighted();
console.log(post1);
console.log(attachedPost1);

//es6
class Post {
    constructor (author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(newText) {
        this.text = newText;
    }
}
class AttachedPost extends Post {
    constructor (author, text, date) {
        super(author, text, date);
        this.highlighted = false; 
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}
const post1 = new Post ('Artem', 'Hello world', '03.11.2020');
post1.edit ('Good morning world');
const attachedPost1 = new AttachedPost ('Alex', 'Hello world', '03.11.2020');
attachedPost1.makeTextHighlighted();
console.log(post1);
console.log(attachedPost1);