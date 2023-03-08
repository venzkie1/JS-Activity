// Array of objects is contained in curly braces {}
let students = {
    firstName: `Kevin`, //use comma instead of semi-colon
    lastName: `Membreve`, 
    email: `kevinmembreve32@gmail.com`,
    phone: 09123456789
}
// Displaying the object syntax: object.property
document.write(`Name: ${students.firstName} ${students.lastName}<br>Email: ${students.email} <br>Phone: ${students.phone}<br>`);



// create objects by instance
let customer = new Object();
// Array of objects using constructor "let variable = new Object()"
customer.firstName = `Kebs`; //here we use semi-colon
customer.middleName = `Pogay`;
customer.lastName = `Katacute`; 



// Creating an object by using constructor
function person(firstname, lname, emailadd, contact)
// each element value can be design by using the This keyword, syntax: this.firstname
// this keyword refers to the current object
{
    this.firstname = firstname;
    this.lastname = lname;
    this.email = emailadd;
    this.phone = contact;
    this.changePhone = changePhone;

    // creating a function method syntax: function variable(variable){this.variable = variable}
    function changePhone(otherNumber)
    {
        this.phone = otherNumber
    }
} 


let employee = new person(`Louie`, `Martinez`, `louiemartinez@gmail.com`, `09123456789`);
document.write(`<br><br>${employee.firstname}<br> ${employee.lastname} <br> ${employee.email}<br>${employee.phone}`);
// document.write(`<br><br>${customer.firstName} ${customer.middleName} ${customer.lastName}`);

let adik = new person(`Reynald`, `Fillar`, `reynaldfillar@gmail.com`, `09123456789`);
document.write(`<br><br>Name: ${adik.firstname} ${adik.lastname} <br> Email: ${adik.email}<br>Phone: ${adik.phone}`);

adik.changePhone(`09999122195`);
document.write(`<br><br>${adik.firstname} <br>${adik.phone}`)

// let fname = prompt(`Enter First Name: `);
// let lname = prompt(`Enter Last Name: `);

let cars  = [
    {
        color: `Red`,
        type: `SUV`,
        capacity: 5,
        registration: `66-66-66`
    },
    {
        color: `Yellow`,
        type: `VAN`,
        capacity: 8,
        registration: `33-33-33`
    },
    {
        color: `Yellow`,
        type: `Compact`,
        capacity: 4,
        registration: `42-02-42`
    },
    {
        color: `Brown`,
        type: `COUPE`,
        capacity: 2,
        registration: `6-9-9`
    },
    {
        color: `Gray`,
        type: `JEEP`,
        capacity: 16,
        registration: `6-9-9`
    },
    ]
 // small 1-3 capacity med 4-5, large 6-9
//  if else
    let carSize = cars.map(kotse =>{
        if (kotse.capacity <= 3)
        {
        return `<br>Small`;
        }
        else if (kotse.capacity <= 5)
        {
            return `<br>Medium`;
        }
        else
        {
            return `<br>Large`;
        }
    })
    document.write(`<br><br>${carSize}`);


    // switch case
let carCap = cars.map(kotse =>{
    switch(true)
    {
        case kotse.capacity <= 3:
           return `<br>Small`;
        case kotse.capacity <= 5:
            return `<br>Medium`;
        default:
            return `<br>Large`;
    }
})
document.write(`<br><br>${carCap}`)

// map and function method if else
let carB = cars.map(
    function(kotscar)
    {
        if (kotscar.capacity <= 3)
        {
            return `<br>Small`;
        }
        else if (kotscar.capacity <= 5)
        {
            return `<br>Medium`
        }
        else
        {
            return `<br>Large`
        }
    }
)
document.write(`<br><br>${carB}`)

// map and function method switch case
let carD = cars.map(
    function(cariton)
    {
        switch(true)
        {
            case cariton.capacity <=3:
                return `<br>Small`;
            case cariton.capacity <=5:
                return `<br>Medium`;
            default:
                return `<br>Large`;
        }
    }
)
document.write(`<br><br>${carD}`)





// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.
// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).

// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

// sort method
cars.sort((a, b) => {
    return a.capacity - b.capacity
});
cars.forEach((e) => {
    document.write(`<br><br>Color: ${e.color} <br>Type: ${e.type} <br>Registration: ${e.registration} <br>Capacity: ${e.capacity}`)
})



document.write(`<h1>Car Array List</h1>`);
document.write(
    `<table>
    <theader> 
    <tr>
    <th> Color </th>
    <th> Type </th>
    <th> Registration </th>
    <th> Capacity </th>
    </theader>`
)
cars.forEach(function(car)
{    
    // document.write(`<br><br>Color: ${car.color} Type: ${car.type} Registration: ${car.registration} Capacity: ${car.capacity}`);

    // forIn
    // key is a user defined variable that will represent the property eg. color,type,capacity
    // object is car that is assigned in forEach function
    document.write(`<tr>`);
    for (const key in car) {
       document.write(`<br><br><td>${key}: ${car[key]}</td>`);
    }
    document.write(`</tr>`);
})
document.write(`</table>`);




    let car = {
        color: `purple`,
        type: `Sports Car`,
        registration: `6-6-6`,
        capacity: 2

    }

    cars.unshift(car);
    cars.push(car);
    cars.splice(2,0, car);
    cars.pop();

    console.log(cars);

    // Find objects from array using .find(car => car.variable === ``)
    // find only returns one object
    let carRed = cars.find(kotse => kotse.color === `Red`);
    console.log(carRed);
    // document.write(carRed.color, carRed.type)

    let carYellow = cars.filter(kotse => kotse.color === `Yellow` && kotse.type === `VAN`);
    console.log(carYellow);
    

    // let size = cars.find(kotse => kotse.capacity <= 3 );
    // document.write(`<br><br>Capacity: ${size.capacity} Small Car`);



