// // array add an array
//                 // 0       1        2      3       4 - index
//                 // 1       2        3      4       5 - array length
// // let students = [`Pedro`,`Penduko`,`Kebs`,`Levi`,`Johnny`];
// // document.getElementById(`display`).textContent = `The array length is ${students.length} and the names are: ${students}`;


// // console.log(students);
// // add an array
// // students[5] = `Eren`;
// // console.log(students);


// // constractor
// // let students2 = new Array(`Pedro`,`Penduko`,`Kebs`,`Levi`,`Johnny`)
// // console.log(students2);


// let student3 = new Array();
// student3[0] = `Pedro`;
// student3[1] = `Penduko`;
// student3[2] = `Kebs`;
// student3[3] = `Levi`;
// student3[4] = `Johnny`;

// document.getElementById(`display`).textContent = student3;



let student4 = [`Pedro`,`Penduko`,`Kebs`,`Levi`,`Johnny`];

// //     // The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

    //  The join() method takes all items in an iterable and joins them into one string. A string must be specified as the separator.
document.getElementById("display").innerHTML += student4.join("<li>");
document.getElementById("display2").innerHTML += student4.join("<li>");


// // foreach loop
// // let numbers = [1, 2, 3, 4, 5];
// // let total = 0;

// // numbers.forEach(getTotal);

// // function getTotal(num)
// // {
// //     total += num;
// // }
// // document.getElementById(`displayTotal`).innerHTML += total;


// // numbers.forEach(function(number){
// //     console.log(number);
// // })


// // arrow function
// // numbers.forEach(number=>console.log(number))


// // arrow function with three parameters
// // numbers.forEach((number, index, array) =>{
// //     console.log(`index: ${index}, value: ${number}`)
// //     console.log(array)
// // })

// // This is concatanation of 2 array
// let alpha = [`a`,`b`,`c`,`d`,`e`];
// // let aplhaNumeric = alpha.concat(numbers);
// // console.log(aplhaNumeric);

// // add element in an array
// alpha.push(`f`);
// console.log(alpha);


// // add one or more element in an array with push() method
// let students = [`Pedro`,`Penduko`,`Kebs`,`Levi`,`Johnny`];
// students.push(`Parekoy`);
// console.log(students);

// // pop() removes the last element
// students.pop();
// console.log(students);

// // shift() removes or extract the first element 
// students.shift();
// console.log(students);

// // unshift() add an element at the beginning of the array
// students.unshift(`Estrella`);
// console.log(students);

// // slice() method extract a section of a string and returns a new string
// let fruits = [`Orange`, `Mango`, `Grapes`, `Pineapple`, `Banana`, `Apple`]

// document.write(fruits)

// document.write(`<br><br>fruits.slice(0, 1) : ${fruits.slice(0, 1)}`);
// document.write(`<br><br>fruits.slice(1, 2) : ${fruits.slice(1, 2)}`);
// document.write(`<br><br>fruits.slice(1, 3) : ${fruits.slice(1, 3)}`);
// document.write(`<br><br>fruits.slice(1, 4) : ${fruits.slice(1, 4)}`);
// document.write(`<br><br>fruits.slice(1, 4) : ${fruits.slice(1, -4)}`);

// // splice 
// fruits.splice(3, 1, "Guava");
// document.write(`<br><br>${fruits}`);


// let months = [`January`, `February`, `Monday`, `Tuesday`];

// document.write(`<br><br>${months}`);

// months.splice(2, 2 ,"March" ,"April");
// document.write(`<br><br>${months}`);

// months.splice(2, 2 ,"March" ,"April", "May");
// document.write(`<br><br>${months}`);

// months.splice(2, 2, "June" ,"March" ,"April");
// document.write(`<br><br>${months}`);


// // sort() method sorts the list of array in place
// fruits.sort();
// document.write(`<br><br>${fruits}`);

// // reverse() method is used to reverse the order of array
// fruits.reverse();
// document.write(`<br><br>${fruits}`);

// // Array mapping
// // map() method
// let numbers2 = [1, 2, 3, 4, 5];
// let newDoubleNum = numbers2.map(num2 => num2 * 2)
// console.log(newDoubleNum);

// // The filter() method creates a new array filled with elements that pass a test provided by a function.
// // The filter() method does not execute the function for empty elements.
// // The filter() method does not change the original array.

// // filter() method         singular to iterate individually
//                                     // here
// let newFilterNum = numbers2.filter(even => even % 2 == 0);
// console.log(newFilterNum);


// // The reduce() method executes a reducer function for array element.
// // The reduce() method returns a single value: the function's accumulated result.
// // The reduce() method does not execute the function for empty array elements.
// // The reduce() method does not change the original array.
// // array.reduce(accumulator, currentvalue)
// // reduce() method 
// function sum(num3, nextItem)
// {
//     return num3 + nextItem
// }
// let reduceNum = numbers2.reduce(sum);
// console.log(reduceNum);


// // CHALLENGE #1;
// // Array called = myColor [`rainbow colors] red, orange, yellow, green ,blue, indigo and violet
// // create a div and use this colors and use the background colors from the items in myColor array.