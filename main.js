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

///
//
// //глава6!!!
//
// let o1 = Object.create({x: 1, y: 2});
//
// let o2 = Object.create(Object.prototype)
//
// let о = {}; // о наследует методы объекта от Object .prototype
// о.х = 1 ; // и теперь имеет собственное свойство х.
//     let р = Object .create (о); //р наследует свойства от о и Object, prototype
// р.у = 2; // и имеет собственное свойство у.
//     let q = Object .create (р); //q наследует свойства от р, о и . ..
// q.z = 3;
// console.log(q.х+q.y)
//
//
// let unit = {r : 1};
// let c = Object.create(unit);
// c.x = 1;
// c.y = 1;
// c.r = 2;
// unit.r; // = 1
//
//
// //Если свойства не существует, то это не ошибка,а если не существует объекта, то это ошибка.
//
// let book = {
//     date : 2014
// }
//
// let surname = undefined;
//
// if (book){
//     console.log("Пройден первый этап проверки")
//     if (book.author){
//         console.log("Пройден второй этап проверки")
//         surname = book.author.name;
//     }
// }
//
// book.author = {name : "vadem"};
//
// surname = book && book.author && book.author.name && book.author.name.first;
//
// console.log(surname)
//
// surname = book?.author?.name;
// console.log(surname)

// let o = {x : 1};
//
// // console.log("x" in o);
// // console.log("y" in o);
// // console.log("toString" in o);
// //
// // //------------------
// //
// // console.log(o.hasOwnProperty("x"));
// // console.log(o.hasOwnProperty("y"));
// // console.log(o.hasOwnProperty("toString"));
//
// //--------------
//
// console.log(o.propertyIsEnumerable("x"));
// console.log(o.propertyIsEnumerable("toString"))
// console.log(Object.prototype.propertyIsEnumerable("toString"))
// console.log("toString" in Object.prototype)
//
// //---------------------------
// console.log(o.x !== undefined)
// console.log(o.y !== undefined)
// console.log(o.toString !== undefined)


// let o = {x : undefined};
// console.log(o.x !== undefined) //false
// console.log(o.y !== undefined) //false
// console.log("x" in o) //true
// console.log("y" in o) //false
//
// delete o.x;
// console.log("x" in o);
//
// let o = {
//     x:1,
//     y:2,
//     z:3
// }
//
// for (let p in o){
//     console.log(p);
// // }
//
// let k = Object.create(o);
//
// // for (let p in k){
// //     console.log(p)
// // }
//
// k.x = 2;
//
// // for (let p in k){
// //     if (!k.hasOwnProperty(p)) continue
// //     console.log(p)
// // }
//
//
//
// let target = {x : 1}, sourse = {y : 2, z : 3}
//
// for (let key of Object.keys(sourse)){
//     target[key] = sourse[key];
// }
//
// console.log(target);
//

// let o = {
//     x: 1,
//     y: {z : [false, null, ""]}
// }
//
// let s = JSON.stringify(o);
// let p = JSON.parse(s);
// console.log(o)
// console.log("\n")
// console.log(s)
// console.log("\n")
// console.log(p)

//
// let point = {
//     x : 1000,
//     y : 2000,
//     toString : function (){
//         return `(${this.x}, ${this.y})`;
//     },
//     toLocaleString: function () {
//         return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`
//     },
//     toJSON: function() { return this.toString()}
// }
//
// console.log(point.toString())
// console.log(point.toLocaleString())
// console.log(JSON.stringify(point))

// let x = 1, y = 2;
// let o = {x,y};
// console.log(o)

// const PROPERTY_NAME = "p1";
// function setmame(){
//     return "p" + 2;
// }
//
// let p = {
//     [PROPERTY_NAME] : 1,
//     [setmame()] : 2
// };
//
// console.log(p)
//
// let position = { x: 0, y: 0};
// let dimensions = {width : 100, height : 75};
// let rect = {...position,...dimensions};
// console.log(rect.x+rect.y+rect.width.rect.height);
//
//
// let square = {
//     area : function () {
//         return this.side*2
//     },
//     side : 4
// }
// //Эквивалентная запись
// let square1 = {
//     area() {
//         return this.side*2
//     },
//     side : 4
// }
//
// const METHOD_NAME = "m" ;
// const symbol = Symbol();
// let weirdmethod = {
//     "method with spaces" (x) {return x + 1},
//     [METHOD_NAME] (x) {return x + 2},
//     [symbol](x) {return x + 3}
// }
//
// weirdmethod["method with spaces"](1);
// weirdmethod[METHOD_NAME](1);
// weirdmethod[symbol](1);


// let p = {
//     x : 1.0,
//     y : 1.0,
//
//     get r() {return Math.hypot(this.x,this.y);},
//     set r(newvalue) {
//         let oldvalue = Math.hypot(this.x,this.y);
//         let ratio = newvalue/oldvalue;
//         this.x *= ratio,
//         this.y *= ratio;
//     },
//     get theta(){return Math.atan2(this.x, this.y);}
// }
//
// console.log(p.r);
// console.log(p.theta)
//
//
//
// const serialnum = {
//     _n : 0,
//     get next(){return this.n ++},
//     set next(n){
//         if (n > this._n)
//             this._n = n;
//         else throw new Error("Порядковый номер должен быть больше чем предыдущие порядковые номера");
//     }
// }
// serialnum.next = 10;
// serialnum.next
// console.log(serialnum.next)
// serialnum.next
// console.log(serialnum.next)

//ГЛАВА 7!!!

// let empty = [];
// let primes = [1,3,5,67,8,2]
// let mix = [1,"six", true,]
//
// let base = 1024;
// let baseplus = [base+1,base+2,base+3]
//
// let b1 = [[1, {x : 2 , y: 4}],[2, {x : 3, y:4}]]
//
// let count = [1,,3];
// let undefs = [,,]
//
// let a = [1,2,3];
// let b = [4,...a,5];
//
// console.log(b)
//
// let word = "Hello Darkness My Old Friend";
// let s = [...word];
// console.log(s)
//
// console.log([...new Set(word)])

// let a = new Array();//Пустой массив
//
// let b = new Array(10); //Пустой массив с длинной 10
//
// let c = new Array(3,4,5,6,7,2, "testing, testing");
// console.log(c)
//
// //-----------------------
//
// let d = Array.of(10); //10 - это не длина,а единственный элемент в массиве
//
// let e = Array.of();//Пустой массив
//
// let f = Array.of(4,8,9,2,1,3);
// console.log(f)
//
// let g = Array.from(c);
// // console.log(c == g) //Так нельзя видимо надо по элементам
// console.log(g)


// let a = [];//Пустой массив
// a[1000] = 4; //Разреженный массив
// console.log(a.length);
// console.log(a)
//
// let a1 = [,]
// let a2 = [undefined]
//
// console.log(0 in a1)
// console.log(0 in a2)
//
// let a = [1,2,3,4,5]
// a.length = 3;
// console.log(a)
// a.length = 0;
// console.log(a)
// a.length = 5;
// console.log(a)//[ <5 empty items> ]
// a.push(1,4,5,6,7,3);
// console.log(a)//[ <5 empty items>, 1, 4, 5, 6, 7, 3 ]
// a.unshift("firstelemetofmassiv");//Добавление элемента в начало массива
// console.log(a)
// a.pop()
// console.log(a)//Удаление элемента из конца массива
//
// delete a[7];
// console.log(a)
// for (let i = 0;i<6;i++){
//     a.shift()
// }
// console.log(a)
//
// let everyother = ""
//
// let letters = [..."Hello Darkness My Old Friend"];
//
//
// for (let [index, letter] of letters.entries()){
//     if (index %2 === 0)
//         everyother = everyother + letter;
// }
//
//
// console.log(everyother)
//
// let uppercase = ""
// letters.forEach(letter => { uppercase = uppercase + letter.toUpperCase()})
// console.log(uppercase)

// let table = new Array(10);
// for (let i = 0;i < table.length; i++){
//     table[i] = new Array(10);
// }
//
// for (let row = 0; row < table.length;row++)
//     for (let column = 0; column < table.length; column++){
//         table[row][column] = row * column;
//     }
//
// console.log(table[2][4])

// let data = [1,2,3,4,5], sum = 0;
// data.forEach(value => {sum += value;})
// data.forEach(function (value, index, array) {
//     array[index] = value + 1;
// })
//
// let a = [1,2,3]
// a.map(x => x*x)
//
// let b = [1,5,5,765,3,6,,2,1,33124,23556,46,547,567,4,5345,2,2,43,6,546,54,65,4,6,4,3]
// // b=b.filter(x=> x<7)//фильтрация
// // console.log(b)
//
// console.log(b.find(x=> x > 4));//Первое значение удолетворяющее запросу
// console.log(b.findIndex(x=> x>20000));
// console.log(b[9])
//
// console.log(b.every(x => x > 2)); //Каждое число в массиве больше 2-х
// console.log(b.some(x => x > 10000)); //хотя бы одно число в массиве больше 10000


// let array = [4,45,[2,3,[5,6]],[4,5]];
// console.log(array.flat());
//
// let a = [1,2,3]
// console.log(a.concat(4, 5));
//
// console.log(a.concat([4, 5], [6, 7]));
// console.log(a.concat(4,[5,6,[7,9,10,[1,2]]]));

// let a = [];
// a.unshift(1);
// a.unshift(2);
// console.log(a)//[ 2, 1 ]
// a = [];
// a.unshift(1,2)
// console.log(a)//[ 1, 2 ]

// let a = [1,2,3,4,5]
// console.log(a.slice(0, 3));//[ 1, 2, 3 ]
// console.log(a.slice(2));//[ 3, 4, 5 ]
// console.log(a.slice(1, -1));//[ 2, 3, 4 ]
// console.log(a.slice(-3, -2));//[ 3 ]

// let a = [1,2,3,4,5,6,7,8,9]
// console.log(a.splice(2, 3));//Удаляет 3 элемента начиная со 2 индекса
// console.log(a);
// a.splice(2,3,"n","e","w");
// console.log(a);//[ 1, 2, 'n', 'e', 'w', 9 ]
//
// a.fill(5,2,6);
// console.log(a)//[ 1, 2, 5, 5, 5, 5 ]
// a.push(1,2,3,5,6,8)
// console.log(a);
// a.copyWithin(1,3,6);
// console.log(a);

//
// let a = [2,4,6,7,2,3,4,51,1]
// console.log(a.indexOf(4));//1
// console.log(a.lastIndexOf(2));//4
// console.log(a.indexOf(145));//-1 т.к. не существует
// console.log(a.includes(51));//true,т.к 51 есть в массиве
//
// a = a.sort();
// console.log(a);
//
// a.sort(function (a, b){
//     return a - b;
// })
// console.log(a)
//
// let b = ["Vadem", "Alem", "Sanya", "selfetka"];
// b.sort(function (x,y){
//     let a = x.toLowerCase();
//     let b = y.toLowerCase();
//     if (a<b) return -1;
//     if (b>a) return 1;
//     return  0;
// })
//
// console.log(b);
//
// let a = [1,2,4,5,7,,8,,,766,5,4,3,3,5,5];
// console.log(a.join());//1,2,4,5,7,,8,,,766,5,4,3,3,5,5
// console.log(a.join(""));//124578766543355

/*let a = {};
let i = 0;
while (i<10){
    a[i] = i*i;
    i++;
}

a.length = i;
console.log(a);

let total = 0;
for (let j = 0;j<=a.length;j++){
    total += a[j];
}*/

//Глава 8!!!

// const square = function (x){return x*x};
//
// const f = function fact(x) {
//     if (x <= 1) return 1;
//     else return x*fact(x-1);
// }
// let tensquared = (function (x) {
//     return x*x;
// }(10))
//
// const sum = (x,y) => {return x+y};
// const sum2 = (x,y) => x+y;
//
// const polynomial = х => х*х + 2*х + 3;//Один параметр,нет скобок
//
// const f2 = x => {return {value : x};};
// const g = x => ({value : x});
//
// let squares = [1,2,3,4].map(x=>x*x);
//
//
// let calculator = {
//     x : 1,
//     y : 1,
//     sum : 0,
//     add() {
//         this.sum = this.sum + this.x + this.y;
//     }
// }
//
// console.log(calculator.sum);
// calculator.add();
// console.log(calculator.sum);
// calculator.add();
// calculator.add();
// calculator.add();
// console.log(calculator.sum);

//
// let o = {
//     m : function (){
//         let self = this;
//         console.log(o === this);
//         f();
//         function f(){
//             console.log(this === o);//this является глобальным объектом, но можно исправить если использовать стрелочные функции, тогда this насследуется
//             console.log(self === o);
//
//         }
//     }
// }
// o.m();
//
//
// function getPropertyName (o,a){
//     if (a === undefined) a = [];
//     for (let property in o){
//         a.push(property);
//     }
//     return a;
// }
//
// let o = {
//     x:1,
//     y : 3
// }
//
// let p = {
//     z : 4,
//     f : 2,
//     s : 7,
//     l : 11
// }
//
// let a = getPropertyName(o);
// console.log(a)
// getPropertyName(p,a);
// console.log(a)
//
// function hello(o, x = 7, y = 4){//Значения по умолчанию
//     o.newProppery = x + y;
// }
//
// const rectangle = (height, width = height * 2) =>({width , height})
//
// console.log(rectangle(4));
/*


function max (first = -Infinity, ...rest){
    let maxValue = first;
    for (let p of rest){
        if (maxValue < p)
            maxValue = p;
    }
    return maxValue
}

console.log(max(4, 2, 3, 4, 7, 8, 9, 2, 6, 4, 7, 2, 8, 14, 1, 0));

let numbers = [5, 2, 10, -1, 9, 100, 1];
console.log(Math.min(...numbers));*/
/*

function timed(f){
    return function(...args){
        console.log(`Вход в функцию ${f.name}`);
        let startTime = Date.now();
        try{
            return f(...args);
        }
        finally {
            console.log(`Выход из ${f.name} спустя ${Date.now()-startTime} мс`);
        }
    }
}

function benchmark(n){
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum += i;
    return sum;
}

console.log(timed(benchmark)(1000000));

function vectorAdd([x1,x2],[y1,y2]) {
    return [x1+y1,x2+y2];
}

function vectorMultiply ({x,y,z = 1}, scalar){
    return {f: x*scalar, y: y*scalar, z: z*scalar};
}
let p = {
    y : 10,
    f : 2
}
console.log(p);
p = vectorMultiply({x : 2, y : 3},2);
console.log(p);*/


// function arrayCopy({from, to = from, n=from.length,fromIndex = 0,toIndex = 0}) {
//     let valueToCopy = from.slice(fromIndex,fromIndex + n);
//     to.splice(toIndex,0,...valueToCopy);
//     return to;
// }
//
// let a = [1,2,3,4,5], b = [9,8,7,6,5];
// console.log(arrayCopy({from: a, n: 3, to: b, toIndex: 4}));

// function f([x,y, ...cords],...rest) {
//     return [x+y,...cords,...rest]
// }
//
// let a = [2,3,5,67,8];
// let b = [4,8,8,4];
//
// console.log(f(a, b));
//
// function vectorMultiply({x,y, z = 0, ...props},scalar) {
//     return {x : x*scalar, Y:y*scalar,z:z*scalar,...props}
// }
//
// console.log(vectorMultiply({x: 2, y: 3, w: -1, l: 10}, 2));
//
// function drawCirle({x,y,radius, color : [r,g,b]}) {
//
// }

//
// function sum(a) {
//     let total = 0;
//     for (let element of a){
//         total += element;
//     }
//     return total;
// }
//
// // console.log(sum([2, 3, 6, 7]));
// // // console.log(sum(4))//Ошибка
// console.log(sum([2,3,"1"]))//Ошибка, элемент [2] - не число

// uniqueInteger.counter = 0;
//
// function uniqueInteger() {
//     return uniqueInteger.counter++
// }

/*let uniqueInteger1 = (function () {
    let counter = 0;
    return function(){
        return counter++;
    }
})

uniqueInteger1();


// console.log(uniqueInteger());//1
// console.log(uniqueInteger());//2
// console.log(uniqueInteger());//3

function factorial(n) {
    if (Number.isInteger(n) && (n > 0)){
        if (!(n in factorial))
            factorial[n] = n * factorial(n-1)
        return factorial[n];
    }
    else
        return NaN;
    }
    factorial[1] = 1;
    console.log(factorial[7]);
    console.log(factorial(8));
    console.log(factorial[4]);
console.log(factorial[2]);
console.log(factorial[7]);*/
/*


function addPrivateProperty(o,name,predicate){
    let value;
    o[`get${name}`] = function() {return value};
    o[`set${name}`] = function (v) {
        if (predicate && !predicate(v))
            throw new TypeError(`set${name}: недопустимое значение ${v}`)
        else
            value = v;
    }
}

let o = {}
addPrivateProperty(o,"Name",x=> typeof x === "string");

o.setName("Frank");
console.log(o.getName());
// o.setName(0);//Нельзя цифру

console.log(addPrivateProperty.length);*/


/*
function f(y) {
    return this.x + y;
}

let o = {x : 1};

let g = f.bind(o)

console.log(g(2));//3 = 1 + 2

let p = {
    x:10,
    g
}
*/

// console.log(p.g(2));

//-----------------
/*

let sum = (x,y) => x+y;
let succ = sum.bind(null, 1)//х привязывается к 1
console.log(succ(2));

function f(y,z){return this.x + y + z}
let g = f.bind({x : 1},2)
console.log(g(3));*/
/*

let data = [1,1,3,5,5]

let total = 0;
for (let i = 0;i<data.length;i++)
    total += data[i];
let mean = total/data.length;

total = 0;

for (let i = 0; i<data.length;i++){
    let deviation = data[i]-mean;
    total += deviation*deviation
}
let stddev = Math.sqrt(total/(data.length-1))
console.log(stddev);*/

/*

const sum = (x,y) => x+y;
const square = x => x*x;

let data = [1,1,3,5,5]
let mean = data.reduce(sum)/data.length;
let deviation = data.map(x=>x-mean);
let stddev = Math.sqrt(deviation.map(square).reduce(sum)/(data.length-1))
console.log(stddev);

const map = function (a, ...args){return a.map(...args)}
const reduce = function(a, ...args){return a.reduce(...args)}

let mean2 = reduce(data,sum)/data.length
let deviation2 = map (data, x => x-mean);*/
