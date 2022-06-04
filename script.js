myName = prompt("What is your name?");
console.log(`My name is ${myName.trim()}`);

mySurname = prompt("What is your surname?");
console.log(`My surname is ${mySurname.trim()}`);

myEmail = prompt("What is your email?");
console.log(`My email is ${myEmail.trim().toLowerCase()}`);

yearOfBirth = prompt("What is your year of birth?");
console.log(`My year of birth is ${yearOfBirth.trim()}`);

if(myEmail.indexOf(`@`) == -1){ 
	console.log(`@ not found in ${myEmail}`);
} else if(!myEmail.indexOf(`@`)){ 
	console.log(`@ found in first place in ${myEmail}`);
} else if(myEmail.indexOf(`@`) === myEmail.length-1){ 
	console.log(`@ found in last place in ${myEmail}`);
} 

today = new Date();
todayYear = today.getFullYear();
age = todayYear - yearOfBirth;






document.write(`
	<p>Info about:</p>
	<ul>
		<li>First name: ${myName}</li>
        <li>First surname: ${mySurname}</li>
        <li>Email: ${myEmail}</li>
        <li>Year: ${yearOfBirth}</li>
        <li>Age: ${age}</li>
	</ul>
`);

