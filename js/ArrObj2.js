// single object array, enclosed in curly brace, if multiple objects enclosed in array.
// const students = [
//     {
//         firstName: `Kevin`,
//         lastName: `Membreve`,
//         grade: 75
//     },
//     {
//         firstName: `Reynald`,
//         lastName: `Pogi`,
//         grade: 100
//     },
//     {
//         firstName: `Mike`,
//         lastName: `Kyutie Pare`,
//         grade: 83
//     },
//     {
//         firstName: `Ralph`,
//         lastName: `Habulin`,
//         grade: 79
//     },
//     {
//         firstName: `Alexis`,
//         lastName: `Inspired`,
//         grade: 95
//     },
//     {
//         firstName: `Maycaela`,
//         lastName: `Walang Tulog`,
//         grade: 85
//     }

// ];
// document.write(`The Length of array is: ${students.length}`);


// // Array Prototype
// let student = {}
// let productPrice = [100, 150, 200, 300];
// Array.prototype.add = function() //user defined function add()
// {
//     let result = 0; // store the array
//     // this keyword to call the add array
//     for(let i = 0; i < this.length; i++)
//     {
//         result += this[i]; //to call the iteration of array [i]
//     }
//     return result;
// }
// document.write(`<br><br> The Product Price: ${productPrice.add()}`)


// students.map(student =>{ //map -> per object
//     //forin -> per properties
//     for (const studentProp in student) //key -> property name
//         document.write(`<br><br>${studentProp} : ${student[studentProp]}`);
// });

// document.write(`<br><br><h1>Students with grade less than 95</h1>`);
// students.filter(obj => {
//     if (obj.grade < 95 ) 
//     {
//         document.write(`<br><br>Name: ${obj.firstName} ${obj.lastName} <br>Grade: ${obj.grade}`)
//     }
// });

let product = [
{
    Name: `Product1`,
    Price: 200,
    Category: `Electronics`
},
{
    Name: `Product2`,
    Price: 300,
    Category: `Clothes`
},
{
    Name: `Product3`,
    Price: 250,
    Category: `Electronics`
},
{
    Name: `Product4`,
    Price: 100,
    Category: `Clothes`
},
{
    Name: `Product5`,
    Price: 600,
    Category: `Clothes`
},
{
    Name: `Product6`,
    Price: 300,
    Category: `Food`
},
{
    Name: `Product7`,
    Price: 200,
    Category: `Food`
},
{
    Name: `Product8`,
    Price: 540,
    Category: `Clothes`
},
{
    Name: `Product9`,
    Price: 210,
    Category: `Food`
},
{
    Name: `Product10`,
    Price: 700,
    Category: `Electronics`
}
];

// function tabular array lists
// function declaration
function displayProducts(categoryName)
{
    document.write(`
        <h4>${categoryName} Category</h4>;
        <table class="table table-warning">
        <thead>
        <tr>
        <th>Name: </th>
        <th>Price: </th>
        <th>Category: </th>
        </tr>
        </thead>`);
    product.filter(obj => {
        document.write(`<tr>`)
        if (obj.Category === `${categoryName}`)
        {
            document.write(`<td> ${obj.Name}</td>
            <td>${obj.Price}</td>
            <td>${obj.Category}</td>`);
        }
        document.write(`</tr>`);
    })
    document.write(`</table>`)
}
displayProducts(`Clothes`);
displayProducts(`Electronics`);
displayProducts(`Food`);



// function nameFunction() - without a parameter

// Function decleration
// function nameFunction(nameParameter1, nameParameter2,...)

// function Expression
// Let products = function(){actions to be taken} - anonymous function
// Let products = function(nameParameter){actions to be taken} 

// arrow function   -keyword function doesn't need to be there
// arrow function can be parameter less or with parameter

// arrow function parameterless
// () => {actions to be taken}

// arrow function with parameter
// (nameParameter1, nameParameter2,...) => {actions to be taken}












// Display the products into table per category -> 1.Clothes, 2.Electronics, 3.Food
// create a function that will display products in table per category.

// const categoryTable = document.getElementById("category");

// // Define the category order for display
// const categoryOrder = ["Clothes", "Electronics", "Food"];

// // Loop through each category
// categoryOrder.forEach(category => {
//     // Filter the products that belong to the current category
//     const categoryProducts = product.filter(product => product.Category === category);

//     // Map the filtered products to HTML table rows
//     const categoryRows = categoryProducts.map(product => {
//         return `
//       <tr>
//         <td>${product.Name}</td>
//         <td>${product.Price}</td>
//         <td>${product.Category}</td>
//       </tr>
//     `;
//     });

//     console.log(categoryRows);
//     //display
//     document.getElementById("category").innerHTML += categoryRows.join("");

// });

