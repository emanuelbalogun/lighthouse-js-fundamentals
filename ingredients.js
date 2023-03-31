const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for(let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

let j = 0
while(j < ingredients.length)
{
  console.log(ingredients[j]);
  j++;
}


while(j>0){
  console.log(ingredients[j-1]);
  j--
}