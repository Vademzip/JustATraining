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


let p = {
    x : 1.0,
    y : 1.0,

    get r() {return Math.hypot(this.x,this.y);},
    set r(newvalue) {
        let oldvalue = Math.hypot(this.x,this.y);
        let ratio = newvalue/oldvalue;
        this.x *= ratio,
        this.y *= ratio;
    },
    get theta(){return Math.atan2(this.x, this.y);}
}

console.log(p.r);
console.log(p.theta)



const serialnum = {
    _n : 0,
    get next(){return this.n ++},
    set next(n){
        if (n > this._n)
            this._n = n;
        else throw new Error("Порядковый номер должен быть больше чем предыдущие порядковые номера");
    }
}
serialnum.next = 10;
serialnum.next
console.log(serialnum.next)
serialnum.next
console.log(serialnum.next)

