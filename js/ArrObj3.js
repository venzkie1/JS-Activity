// let products = [
//     {
//         Name: `Product1`,
//         Price: 200,
//         Category: `Electronics`
//     },
//     {
//         Name: `Product2`,
//         Price: 300,
//         Category: `Clothes`
//     },
//     {
//         Name: `Product3`,
//         Price: 250,
//         Category: `Electronics`
//     },
//     {
//         Name: `Product4`,
//         Price: 100,
//         Category: `Clothes`
//     },
//     {
//         Name: `Product5`,
//         Price: 600,
//         Category: `Clothes`
//     },
//     {
//         Name: `Product6`,
//         Price: 300,
//         Category: `Food`
//     },
//     {
//         Name: `Product7`,
//         Price: 200,
//         Category: `Food`
//     },
//     {
//         Name: `Product8`,
//         Price: 540,
//         Category: `Clothes`
//     },
//     {
//         Name: `Product9`,
//         Price: 210,
//         Category: `Food`
//     },
//     {
//         Name: `Product10`,
//         Price: 700,
//         Category: `Electronics`
//     }
//     ];


//             // chain, combine filter and map.
//     // let categoryFood = products.filter(
//     //     (product) => {
//     //     return product.Category == `Food`
//     // }
//     // ).map((product) =>
//     // {
//     //     return `${product.Name} ${product.Price}`
//     // })
//     // console.log(categoryFood);


//     // map / filter / reduce - chaining
//     let total = 0;
//     let categoryAll = products.map(
//         (product) => {
//             return product.Price
//         }
//     ).filter(product => 
//         (product < 300) ? `${product}` : ""
//     ).reduce((accumulator, currentValue) => accumulator + currentValue, total);
//     console.log(categoryAll);


// // function displayProducts(categoryName)
// // {
// //     document.write(`
// //         <h4>${categoryName} Category</h4>;
// //         <table class="table table-warning">
// //         <thead>
// //         <tr>
// //         <th>Name: </th>
// //         <th>Price: </th>
// //         <th>Category: </th>
// //         </tr>
// //         </thead>`);
// //         // arrow function syntax: () => {}
// //     products.filter(obj => {
// //         document.write(`<tr>`)
// //         if (obj.Category === `${categoryName}`)
// //         {
// //             document.write(`<td>${obj.Name}</td>
// //             <td>${obj.Price}</td>
// //             <td>${obj.Category}</td>`);
// //         }
// //         document.write(`</tr>`);
// //     })
// //     document.write(`</table>`)
// // }
// // displayProducts(`Clothes`);
// // displayProducts(`Electronics`);
// // displayProducts(`Food`);






// // // function
// // function displayProducts(categoryName)
// // {
// //     document.write(`
// //         <h4>${categoryName} Category</h4>;
// //         <table class="table table-warning">
// //         <thead>
// //         <tr>
// //         <th>Name: </th>
// //         <th>Price: </th>
// //         <th>Category: </th>
// //         </tr>
// //         </thead>`);
// //         // arrow function
// //     products.filter(function(obj){
// //         document.write(`<tr>`)
// //         if (obj.Category === `${categoryName}`)
// //         {
// //             document.write(`<td> ${obj.Name}</td>
// //             <td>${obj.Price}</td>
// //             <td>${obj.Category}</td>`);
// //         }
// //         document.write(`</tr>`);
// //     })
// //     document.write(`</table>`)
// // }
// // displayProducts(`Clothes`);
// // displayProducts(`Electronics`);
// // displayProducts(`Food`);







// // // ternary operator: (condition) ? value1 : value2
// // // let permission = (age < 18) ? `You have no permission` : `You have permission`


// // let productSort = products.sort(
// //     (item1, item2) =>
// //     (item1.Category < item2.Category) ? -1 : (item1.Category > item2.Category) ? 1 : 0
// // )

// // document.write(`
// // <tr>
// // <th>Product</th>
// // <th>Price</th>
// // <th>Category</th>
// // <br>
// // </tr>`)
// // let country = 0
// // productSort.forEach( function(item){
// //     document.write(`<tr>
// //     <td>${item.Name}</td> <td>${item.Price}</td> <td>${item.Category}</td> </tr> <br>`)
// // });




document.getElementById(`c2`).innerHTML = 
document.getElementById(`c1`).childNodes[0].nodeValue;


function printvalue(){
    let name_mo = document.form1.namemo.value;
    alert(`Welcome: ${name_mo}`);
};

// JS1
document.getElementById(`button`).addEventListener(`click`,() => {
    alert(`You clicked the button!`);
});

function getAdd()
{
    const num1 = Number(document.getElementById(`val1`).value);
    const num2 = Number(document.getElementById(`val2`).value);
    const add = num1 + num2;
    document.getElementById(`result`).innerHTML = `Addition: ${add}`;
    document.getElementById(`result`).style.color=`red`;
}

function totalelements()
{
    let allgenders = document.getElementsByName(`gender`);
    alert(`Total Genders: ${allgenders.length}`);
}

