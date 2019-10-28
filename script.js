// let num = 20;
// function showFirstMessage (text) {
//     alert(text);
//      let num = 10;
//      console.log (num);
// }

// showFirstMessage("KMG test");
// console.log(num)



// let calc = function (a,b) {
//     return(a + b);
// }

// let calc = (a,b) => a+b

// console.log(calc(3,4));
// console.log(calc(5,6));
// console.log(calc(3,4));



// function retVar () {
//     let num = 50;
//     return num;
// }


// let anotherNum = retVar();
// console.log (anotherNum);

// let str = "test";
// console.log(str.length);


// console.log (str.toUpperCase());
// console.log (str.toLowerCase());


// let twelve = "12.2px";

// // console.log (Math.round(twelve));
// console.log (parseInt(twelve));
// console.log (parseFloat(twelve));








function detectDayBudget () {
    var money = prompt ("Ваш бюджет на месяц?");
    alert(money/30);
    console.log (money);

}
detectDayBudget ();

function chooseOptExpenses () {
    let vop1 = prompt ("Статья необзательных расходов?");
    let vop2 = prompt ("Статья необзательных расходов?");
    let vop3 = prompt ("Статья необзательных расходов?");

    let optionalExpenses = {
        1:vop1,
        2:vop2,
        3:vop3
    };
    console.log (optionalExpenses);
}

chooseOptExpenses();
// console.log (optionalExpenses);












// var money = +prompt("Ваш бюджет на месяц?", '');
//     time = prompt ("Введите дату в формате YYYY-MM-DD", '');

// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timedate: time,
//     savings: false
// };



// for (let i = 0; i < 2; i++){
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", '');
//         b = prompt ("Во сколько обойдется?", '');
//     if ((typeof(a)) === 'string' && (typeof(a))!= null && (typeof(b))!= null && a != '' && b != '' && a.length < 50)
//     {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {}
        
// };

// appData.moneyPerDay = appData.budget/30;



// alert ("Ежедневный бюджет:" + appData.moneyPerDay); 

// if (appData.moneyPerDay < 100) {
//     console.log ("Минимальный уровень достатка");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log ("Средний уровень достатка");
// } else if (appData.moneyPerDay > 2000 ) {
//     console.log ("Высокий уровень достатка");
// } else {
//     console.log ("Произошла ошибка");
// }


// Вопросы к этому заданию
// Какое будет выведено значение: let x = 5; alert( x++ ); ?

// Чему равно такое выражение: [ ] + false - null + true ?

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// Чему равна сумма [ ] + 1 + 2?

// Что выведет этот код: alert( "1"[0] )?

// Чему равно 2 && 1 && null && 0 && undefined ?

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// Что выведет этот код: alert( +"Infinity" ); ?

// Верно ли сравнение: "ёжик" > "яблоко"?

// Чему равно 0 || "" || 2 || undefined || true || falsе ?












// let num = 50;
// // while (num < 55) {
// // console.log (num);
// // num++;

// // }


// }























// // let person = {
// //     name:"John",
// //     age: 25,
// //     isMarried: false

// “Введите обязательную статью расходов в этом месяце”

// “Во сколько обойдется?”

// Записать ответы в объект expenses в формате: 

// expenses: {
// “ответ на первый вопрос” : “ответ на второй вопрос”
// }


// let num = 50;
// if (num < 49) {
//     console.log("ne verno")
// } else if (num > 100){
//     console.log ("More")
// }
//  else {
//      console.log("Verno")
//  }

//  (num == 50) ? console.log ("Verno") : console.log ("Neverno");

// switch (num) {
//     case num < 49: 
//     console.log ("Neverno");
//     break;
//     case num > 100:
//         console.log ("Mnogo");
//         break;
//      case num > 80:
//             console.log ("vse ewe mnogo");
//             break;
//      case num == 50:
//                 console.log ("Verno");
//                 break;
//                 default:
//                     console.log ("Chto to powlo ne tak");
//                     break;


// }






// // if (1) {

// //     console.log ("True11")
// // } else {

// //     console.log ("false11")
// // }



// // 'use strict';

// // a = 5;
// // console.log(a);


// // // var number = 5;
// // // var string = "Hello!";
// // // var sym = Symbol();
// // // var boolean = true;
// // // null;
// // // undefined;
// // // var obj = {};

// // console.log(4/0);
// // console.log('string'*9);
// // let something;
// // console.log(something);


// // let person = {
// //     name:"John",
// //     age: 25,
// //     isMarried: false
// // };
// // console.log(person["name"]);



// // let arr = ['plum.png','orange.jpg', 'apple.bmp'];

// // //console.log(arr[1]);

// // // let answer = confirm("Are you here?");
// // // console.log(answer);


// // // let answer = +prompt("Есть ли Вам 18?", "Да");
// // // console.log(typeof(null));

// // // console.log("arr" + "-object");
// // // console.log(4 + + "-object");
// // /*
// // var leftBorderWidht = 1;
// // let second = 2;
// // const pi = 3.14;


// // console.log(second);
// // /*
// // Testing
// // */


// // let incr = 10,
// //     decr = 10;

// // // incr++;
// // // decr--;
// // console.log(incr++);
// // console.log(decr--);


// // console.log (5%2);
// // console.log("2" === 2);



// // let isChecked = false,
// //     isClose = false;

// //     console.log(isChecked || !isClose);

