// let day=6;
// switch(day){
//     case 1:
//         console.log("its monday");
//         break;
//     case 2:
//         console.log("its tuesday");
//         break;
//     case 3:
//         console.log("its wednesday");
//         break;
//     case 4:
//         console.log("its thursday");
//         break;
//     case 5:
//         console.log("its friday");
//         break;
//     case 6:
//         console.log("its saturday");
//         break;
//     case 7:
//         console.log("its sunday");
//         break;
//     default:
//          console.log(`${day} is not a day`);
// }


// let username="001-020-129-5";

// console.log(username.charAt(0));
// console.log(username.indexOf("o"));
// console.log(username.length);
// console.log(username.toUpperCase());
// console.log(username.repeat(3));
// console.log(username.endsWith(" "));
// console.log(username.startsWith(" "));
// console.log(username.padStart(15, "*"));
// console.log(username.replaceAll("-",""));

//string slicing
// const fullname= "shaibu Daiyan";

// let firstname=fullname.slice(0,fullname.indexOf(" "));
// let lastname=fullname.slice(fullname.indexOf(" "));
// console.log(firstname);
// console.log(lastname);

// const email="dan@gmail.com";
// let username =email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@"));
// console.log(username);
// console.log(extension);

//METHOD CHANGING
let username=window.prompt("enter ur name");
username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase()
console.log(username);