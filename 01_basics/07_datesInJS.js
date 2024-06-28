//dates  

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23) // in js months start from 0
console.log(myCreatedDate.toDateString());

let myCreatedDateNew = new Date(2023,1,17, 7,7) // date and time
console.log(myCreatedDateNew.toLocaleString());

//  myCreatedDate = new Date("2023-01-14") if yymmdd format month starts with 1, we generally prefer mmddyy

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate);