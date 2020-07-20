"use strict";
let admin='Admin';
let password='cage';
if  (admin == '') 
{ console.log('Cenceled!');
} 
else if  (admin != 'Admin') 
{ console.log('I do not know you');
}
else if  (admin == 'Admin' , password == '' ) 
{ console.log('Cenceled!');}
else if  (admin == 'Admin' , password == 'cage' ) 
{ console.log('Welcome!');}
else console.log('Wrong passord');