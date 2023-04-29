let food = prompt("Enter the food name: ").toLowerCase()

if (food.includes('chicken') || food.includes('egg')) {
    console.log(`Non-Veg item is ${food}`)
} else if (food.includes('onion') || food.includes('garlic')) {
    console.log(`Veg-Food item is ${food}`)
}  else if (!(food.includes('onion') || food.includes('garlic')) && !food.includes('chicken')){
    console.log(`Jain Menu item is ${food}`)
}
