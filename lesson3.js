
//Задание 1
//С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно
for (let i=0; i<=10; i++) {
    if (i == 0) {
        console.log (i + " - это ноль")
    } else if (i % 2 == 0) {
        console.log (i + " - это четное число")
    } else {
        console.log (i + " - это не четное число")
    }   
}

//Задание 2
//Выведите в консоль значения, указанные рядом с комментариями: 
const post = {
    author: "John", //вывести этот текст 
    postId: 23,
    comments: [
        {
        userId: 10,
        userName: "Alex", 
        text: "lorem ipsum", 
        rating: {
            likes: 10,
            dislikes: 2 //вывести это число
            }
        }, 
        {
        userId: 5, //вывести это число 
        userName: "Jane",
        text: "lorem ipsum 2", //вывести этот текст 
        rating: {
            likes: 3,
            dislikes: 1 
            }
        }, 
    ]  
}
console.log (post.author)
console.log (post.comments[0].rating.dislikes)
console.log (post.comments[1].userId)
console.log (post.comments[1].text)

//Задание 3
//Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%
const products = [ 
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    }
]
products.forEach(elem => elem.price = elem.price-(elem.price*0.15));

console.log(products)


//Задание 4

const products = [ 
    {
    id: 3,
    price: 127,
    photos: [
        "1.jpg",
        "2.jpg", 
        ]
    }, 
    {
    id: 5,
    price: 499,
    photos: []
    }, 
    {
    id: 10,
    price: 26,
    photos: [
        "3.jpg"
        ] 
    },
    {
    id: 8,
    price: 78 
    }
]

const productWithPhoto = products.filter(products => (products.photos != undefined && products.photos.length > 0));
productWithPhoto.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
  });
console.log(productWithPhoto);

//Задание 5
for (let i=0; i<=9; console.log(i), i++) {}



//Задание 6

for (let i=1; i<=20; i++) {
    let str =''
    for (let j=0; j<i; j++) {
        str += 'x';
    }
    console.log(str)
}

