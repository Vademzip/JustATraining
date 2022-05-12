// console.log('Hello world!');
// let x = 5;
// x = 0;
// x = 0.05;
// x = "привет";
// x = 'Ку';
// x = true;
// x = null;
//
// //Создание объекта
// let chelsea_squad = {
//     name : "marcello",
//     age : 24
// }
// // console.log(chelsea_squad.name);
// // console.log(chelsea_squad["age"]);
// // console.log(chelsea_squad.age);
//
// //Добавление свойства
// chelsea_squad.lastname = "bielsa";
// // console.log(chelsea_squad.lastname);
//
// let new_massiv = [2, 7, 10, 1];
// // console.log(new_massiv[0]);//Первый элемент
// // console.log(new_massiv[new_massiv.length-1]);
//
// new_massiv[4] = 4; //Добавление элемента в массив
// new_massiv[4] = 7; //Изменение элемента
//
// let combo_massiv = [
//     {
//         x : 4,
//         y : 8
//     },
//     {
//         z : 10
//     }
// ]

let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];



// console.log("pi "+" vo");
//
// let y = "vadem" > "vadya"; //проверка по алфавитному порядку
// console.log(y);


function test1(x){
    return x + 1;
}

let z = 7;
console.log(test1(z));

const test2 = x => x + 1;
const square = x => x*x;
console.log(test1(z));
console.log(square(3));

let a = [];
a.push(1,3,5);
a.reverse();

points.dist = function(){ //Функция dist в массиве points
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x-p1.x;
    let b = p2.y-p1.y;
    return Math.sqrt(a*a + b*b);
}

// console.log(points.dist());

class Point {
    constructor(x,y) {
            this.x = x;
        this.y = y;
    }

    distance(){
        return(Math.sqrt(this.x*this.x + this.y * this.y));
    }

}


let p = new Point(1,1);
console.log(p.distance());
console.log("\u{1F600}");
