// Array of objects is contained in curly braces {}
let students = {
    firstName: `Kevin`, //use comma instead of semi-colon
    lastName: `Membreve`, 
    email: `kevinmembreve32@gmail.com`,
    phone: 09123456789
}

// Array of objects using constractor "let variable = new Object()"
let customer = new Object();

customer.firstName = `Kebs`; //here we use semi-colon
customer.middleName = `Pogay`;
customer.lastName = `Katacute`; 

document.write(`Name: ${students.firstName} ${students.lastName}<br>Email: ${students.email} <br>Phone: ${students.phone}<br>`);
// document.write(`<br><br>${customer.firstName} ${customer.middleName} ${customer.lastName}`);




// let car = [
// {
//     color: `Red`,
//     type: `SUV`,
//     capacity: 10,
//     registration: `6-6-6`
// },
// {
//     color: `Blue`,
//     type: `VAN`,
//     capacity: 8,
//     registration: `3-3-3`
// },
// {
//     color: `Green`,
//     type: `Compact`,
//     capacity: 6,
//     registration: `4-0-4`
// }
// ]

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
    document.write(carSize);


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









    let car = {
        color: `purple`,
        type: `Sports Car`,
        registratio: `6-6-6`,
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



