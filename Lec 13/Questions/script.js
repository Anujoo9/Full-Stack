const pass = prompt("Enter password")

// if (pass.length < 6 || pass.includes(' ','$','*','#')) { // not working

if ((pass[0].toLowerCase() === pass[0] )||pass.length < 6 || pass.includes(' ') || pass.includes('#') || pass.includes('$') || pass.includes('*')) {
    console.log("Invalid password")
} else {
    console.log("Correct pass")
}

