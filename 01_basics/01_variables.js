const accountId = "1234509876"
let accountEmail = "anubhav@gamil.com"
var accountPassword = "12345"
 accountCity = "Delhi"

let accountState;

 console.table([accountId,accountEmail,accountPassword,accountCity]);

//  accountId = "69876543" // We Can't Change Const Values

accountEmail = "anubhavtiwari@gamil.com"
accountPassword = "00017"
accountCity = "California"

/*
 Prefer not to Use var 
 because of issues in block scope and functional scope
*/


 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

