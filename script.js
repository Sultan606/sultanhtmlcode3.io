const names = [
	"Yaakov", "John", "Jen", "Jason", "Paul",
	"Frank", "Larry", "Paula", "Laura", "Jim"
  ];
  
  for (const name of names) {
	if (name.charAt(0) === 'J' || name.charAt(0) === 'j') {
	  console.log(`Goodbye ${name}`);
	} else {
	  console.log(`Hello ${name}`);
	}
  }
  