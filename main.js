// // console.log('Hello world!');
// // let x = 5;
// // x = 0;
// // x = 0.05;
// // x = "привет";
// // x = 'Ку';
// // x = true;
// // x = null;
// //
// // //Создание объекта
// // let chelsea_squad = {
// //     name : "marcello",
// //     age : 24
// // }
// // // console.log(chelsea_squad.name);
// // // console.log(chelsea_squad["age"]);
// // // console.log(chelsea_squad.age);
// //
// // //Добавление свойства
// // chelsea_squad.lastname = "bielsa";
// // // console.log(chelsea_squad.lastname);
// //
// // let new_massiv = [2, 7, 10, 1];
// // // console.log(new_massiv[0]);//Первый элемент
// // // console.log(new_massiv[new_massiv.length-1]);
// //
// // new_massiv[4] = 4; //Добавление элемента в массив
// // new_massiv[4] = 7; //Изменение элемента
// //
// // let combo_massiv = [
// //     {
// //         x : 4,
// //         y : 8
// //     },
// //     {
// //         z : 10
// //     }
// // ]
//
// let points = [
//     {x: 0, y: 0},
//     {x: 1, y: 1}
// ];
//
//
//
// // console.log("pi "+" vo");
// //
// // let y = "vadem" > "vadya"; //проверка по алфавитному порядку
// // console.log(y);
//
//
// function test1(x){
//     return x + 1;
// }
//
// let z = 7;
// console.log(test1(z));
//
// const test2 = x => x + 1;
// const square = x => x*x;
// console.log(test1(z));
// console.log(square(3));
//
// let a = [];
// a.push(1,3,5);
// a.reverse();
//
// points.dist = function(){ //Функция dist в массиве points
//     let p1 = this[0];
//     let p2 = this[1];
//     let a = p2.x-p1.x;
//     let b = p2.y-p1.y;
//     return Math.sqrt(a*a + b*b);
// }
//
// // console.log(points.dist());
//
// class Point {
//     constructor(x,y) {
//             this.x = x;
//         this.y = y;
//     }
//
//     distance(){
//         return(Math.sqrt(this.x*this.x + this.y * this.y));
//     }
//
// }
//
//
// let p = new Point(1,1);
// console.log(p.distance());
// console.log("\u{1F600}");
//
//
// let part = 265_948_545;
// console.log(part);
//
// let timestamp = Date.now();
// let now = new Date();
// let timeinms = now.getTime();
// let iso = now.toISOString();
//
// let name = 'name = "myform" HELLO DARKNESS MY OLD FRIEND I COME TO TALK WITH YOU AGAIN';
// console.log(name);

let text = "Hello Darkness My Old Friend";

console.log(text.substring(0,5))
console.log(text.slice(0,5))
console.log(text.slice(-10))//Последние 10 символов
console.log(text.split("Darkness"))

console.log(text.indexOf('F'));
console.log(text.indexOf('O',7));

// let f = text.startsWith("Hello");//Проверка на начало строки
f = text.includes("Friend");
console.log(f);
text = text.replace("Friend", "Bro");
console.log(text);

let s = "Hello, world";
s = s.replace ("llo", "уа");
console.log(s.toLowerCase());
console.log(s.toUpperCase());

s.charAt(0);//Первый символ строки
s.charAt(s.length-1);
console.log(s.charAt(4));


console.log("----------------");

let name = "Serker";
let string1 = `Hello, i introduce to you Big Boy ${name} `;

console.log(string1)

let strname = "it is string!";
let symname = Symbol("it is symbol!");



let o = {};
o [strname] = 1;
o [symname] = 2;
o ["string name1"];

let Aaray = [2,4,6,7,1,4];
let bb = [];
for (let i = 0;i<Aaray.length;i++){
    bb[i]= Aaray[i];
}

let cc = Array.from(Aaray);

console.log(Aaray)
console.log(bb)
console.log(cc)

