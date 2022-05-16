// // // // // console.log('Hello world!');
// // // // // let x = 5;
// // // // // x = 0;
// // // // // x = 0.05;
// // // // // x = "привет";
// // // // // x = 'Ку';
// // // // // x = true;
// // // // // x = null;
// // // // //
// // // // // //Создание объекта
// // // // // let chelsea_squad = {
// // // // //     name : "marcello",
// // // // //     age : 24
// // // // // }
// // // // // // console.log(chelsea_squad.name);
// // // // // // console.log(chelsea_squad["age"]);
// // // // // // console.log(chelsea_squad.age);
// // // // //
// // // // // //Добавление свойства
// // // // // chelsea_squad.lastname = "bielsa";
// // // // // // console.log(chelsea_squad.lastname);
// // // // //
// // // // // let new_massiv = [2, 7, 10, 1];
// // // // // // console.log(new_massiv[0]);//Первый элемент
// // // // // // console.log(new_massiv[new_massiv.length-1]);
// // // // //
// // // // // new_massiv[4] = 4; //Добавление элемента в массив
// // // // // new_massiv[4] = 7; //Изменение элемента
// // // // //
// // // // // let combo_massiv = [
// // // // //     {
// // // // //         x : 4,
// // // // //         y : 8
// // // // //     },
// // // // //     {
// // // // //         z : 10
// // // // //     }
// // // // // ]
// // // //
// // // // let points = [
// // // //     {x: 0, y: 0},
// // // //     {x: 1, y: 1}
// // // // ];
// // // //
// // // //
// // // //
// // // // // console.log("pi "+" vo");
// // // // //
// // // // // let y = "vadem" > "vadya"; //проверка по алфавитному порядку
// // // // // console.log(y);
// // // //
// // // //
// // // // function test1(x){
// // // //     return x + 1;
// // // // }
// // // //
// // // // let z = 7;
// // // // console.log(test1(z));
// // // //
// // // // const test2 = x => x + 1;
// // // // const square = x => x*x;
// // // // console.log(test1(z));
// // // // console.log(square(3));
// // // //
// // // // let a = [];
// // // // a.push(1,3,5);
// // // // a.reverse();
// // // //
// // // // points.dist = function(){ //Функция dist в массиве points
// // // //     let p1 = this[0];
// // // //     let p2 = this[1];
// // // //     let a = p2.x-p1.x;
// // // //     let b = p2.y-p1.y;
// // // //     return Math.sqrt(a*a + b*b);
// // // // }
// // // //
// // // // // console.log(points.dist());
// // // //
// // // // class Point {
// // // //     constructor(x,y) {
// // // //             this.x = x;
// // // //         this.y = y;
// // // //     }
// // // //
// // // //     distance(){
// // // //         return(Math.sqrt(this.x*this.x + this.y * this.y));
// // // //     }
// // // //
// // // // }
// // // //
// // // //
// // // // let p = new Point(1,1);
// // // // console.log(p.distance());
// // // // console.log("\u{1F600}");
// // // //
// // // //
// // // // let part = 265_948_545;
// // // // console.log(part);
// // // //
// // // // let timestamp = Date.now();
// // // // let now = new Date();
// // // // let timeinms = now.getTime();
// // // // let iso = now.toISOString();
// // // //
// // // // let name = 'name = "myform" HELLO DARKNESS MY OLD FRIEND I COME TO TALK WITH YOU AGAIN';
// // // // console.log(name);
// // //
// // // let text = "Hello Darkness My Old Friend";
// // //
// // // console.log(text.substring(0,5))
// // // console.log(text.slice(0,5))
// // // console.log(text.slice(-10))//Последние 10 символов
// // // console.log(text.split("Darkness"))
// // //
// // // console.log(text.indexOf('F'));
// // // console.log(text.indexOf('O',7));
// // //
// // // // let f = text.startsWith("Hello");//Проверка на начало строки
// // // f = text.includes("Friend");
// // // console.log(f);
// // // text = text.replace("Friend", "Bro");
// // // console.log(text);
// // //
// // // let s = "Hello, world";
// // // s = s.replace ("llo", "уа");
// // // console.log(s.toLowerCase());
// // // console.log(s.toUpperCase());
// // //
// // // s.charAt(0);//Первый символ строки
// // // s.charAt(s.length-1);
// // // console.log(s.charAt(4));
// // //
// // //
// // // console.log("----------------");
// // //
// // // let name = "Serker";
// // // let string1 = `Hello, i introduce to you Big Boy ${name} `;
// // //
// // // console.log(string1)
// // //
// // // let strname = "it is string!";
// // // let symname = Symbol("it is symbol!");
// // //
// // //
// // //
// // // let o = {};
// // // o [strname] = 1;
// // // o [symname] = 2;
// // // o ["string name1"];
// // //
// // // let Aaray = [2,4,6,7,1,4];
// // // let bb = [];
// // // for (let i = 0;i<Aaray.length;i++){
// // //     bb[i]= Aaray[i];
// // // }
// // //
// // // let cc = Array.from(Aaray);
// // //
// // // console.log(Aaray)
// // // console.log(bb)
// // // console.log(cc)
// // //
// //
// // //13-05-22
// //
// // // let s = " 4 "
// // // let c = "                  3 "
// // //
// // // console.log(s * c);
// // //
// // // let x1 = 0;
// // // let x2 = "0";
// // // //Сначала будет выполнено преобразование типо к одному а потом сравнение значения
// // // console.log(x1 == x2);
// // //
// // //
// // // console.log(x1 === x2);
// // //
// // // //явное преобразование
// // // let a1 = "Hello number "
// // // let a2 = 7;
// // // console.log(a1+a2);
// // // a2 = a2.toString();
// // // console.log(typeof a2);
// // // let a3 = 17;
// // // a3 = a3.toString(2);
// // // console.log(a3);
// // //
// // // let a4 = 2426.756;
// // // console.log(a4.toFixed(2))
// // // console.log(a4.toExponential(1))
// // // console.log(a4.toExponential(3))
// // // console.log(a4.toPrecision(10))
// // //
// // // console.log(parseInt("hello 5"));
// // // console.log(parseInt("5 my homies around me now"));
// //
// //
// // //деструктивные штуки, очень круто!
// // // let [b1,b2] = [4,7];
// // //
// // // console.log(b1);
// // // console.log(b2);
// // //
// // // function task (x,y) {
// // //     return [x * 44, y + " people "];
// // // }
// // //
// // // console.log(task(b1,b2));
// // //
// // // let [b3,b4,b5] = [3,,7];
// // // console.log(b4);
// // // console.log(b5);
// // //
// // // let [b6,,,b9] = [1,4,6,8];
// // // let [b10,...b12] = [1, "gavno", "zalupa", "penis", "her", "davalka"];
// // //
// // // console.log("b12 = ",b12);
// // //
// //
// // let b13 = {
// //     name : "Igor",
// //     lastname : "lastigor",
// //     age : 23
// // }
// //
// // let {n,l,a} = b13;
// // console.log(b13);
// //
// // b14 = Math.sin;
// // console.log(b14);
// //
//
//
// /// ГЛАВА 4!
//
//
// // let c1 = {
// //     a: {b : {c : 7}}
// // }
// //
// // console.log(c1.a.b.c); //? перед точкой проверяет есть ли вообще такие штуки
// //
// // let f = c1.a.b.c.d;
// //
//
// // console.log(7%4)
// //
// // //Операция in
// //
// // let point = {
// //     x: 1,
// //     y: 1,
// //     f(){
// //         return 4;
// //     }
// // }
// //
// // console.log("x" in point);
// // console.log("x1" in point);
// // console.log("toString" in point);
// // console.log("f" in point);
// //
// // let massiv = [7,98,10];
// // console.log("2" in massiv)//Есть ли элемент с индексом [2] в массиве
// // console.log("44" in massiv)
// // console.log(1 in massiv)//То же самое, но без кавычек, происходит преобразование.
//
// //instanceof
//
// let d = new Date();
// console.log(d instanceof Date);
// console.log(d instanceof Object);//-> true, т.к. все объекты являются экземлпярами класса object
// console.log(d instanceof Number)//->false, т.к. это не является объектом number
//
// let m = [2,7,3];
// console.log(m instanceof Array);
// console.log(m instanceof Object); //Массив входит в object
// console.log(m instanceof RegExp); //Массив не регулярное выражение
//
// //Операция ??
//
// let options = {
//     timeout : 0,
//     title : "",
//     verbose : false,
//     n : null
// }
//
// console.log(options.timeout ?? 1000) // -> 0, т.к. это существующее значение
// console.log(options.title ?? "Untitled")//-> ""
// console.log(options.verbose ?? true) //->false
// //все кроме null и undefined выводит данная операция
// console.log(options.quiet ?? false) //-> false, такого не существует
// console.log(options.n ?? 10)//->10, так как n = null
//
// // оператор delete
//
// let o1 = {
//     x : 1,
//     y : 2
// }
//
// delete o1.x; // Удалить свойство х из 1
// console.log(typeof o1.x); // Свойства не существует
//


// let x = {
//     document: {forms: [
//                 maininfo : name : {
//                         value : 4,
//                         cost : 7,
//                         skill : 1},
//                   infos : {
//                         creator : "vadem",
//                         company : "zip_industry"}]}
// }

