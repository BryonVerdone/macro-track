let proteinGoal = 0;
let carbsGoal = 0;
let fatsGoal = 0;

const goalsForm = document.getElementById('goalsForm');
const foodForm = document.getElementById('foodForm');
const foodList = document.getElementById('foodList');
// const btn = document.getElementById('btn');

goalsForm.addEventListener('submit', function (e) {
  e.preventDefault();

  proteinGoal = parseFloat(document.getElementById('proteinInput').value);
  carbsGoal = parseFloat(document.getElementById('carbsInput').value);
  fatsGoal = parseFloat(document.getElementById('fatsInput').value);

  let proteinDisplay = document.getElementById('proteinDisplay');

  proteinDisplay.innerHTML = proteinGoal;
  let carbsDisplay = document.getElementById('carbsDisplay');
  carbsDisplay.innerHTML = carbsGoal;
  let fatsDisplay = document.getElementById('fatsDisplay');
  fatsDisplay.innerHTML = fatsGoal;
  // if (proteinGoal != Number || carbsGoal != Number || fatsGoal != Number) {
  //   alert('Please enter a number in each field');
  //   location.reload();
  // }
  calculateCalories();
});
function calculateCalories() {
  const totalCalories = proteinGoal * 4 + carbsGoal * 4 + fatsGoal * 9;
  document.getElementById('totalCalories').textContent = totalCalories;
  const macroGoal = [proteinGoal, carbsGoal, fatsGoal];

  console.log(macroGoal);
}

foodForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('food list submitted');

  const foodName = document.getElementById('foodName').value;
  const foodProtein = parseFloat(document.getElementById('foodProtein').value);
  const foodCarbs = parseFloat(document.getElementById('foodCarbs').value);
  const foodFats = parseFloat(document.getElementById('foodFats').value);

  const foodItem = {
    name: foodName,
    protein: foodProtein,
    carbs: foodCarbs,
    fats: foodFats,
  };

  console.log(foodItem);
  addFoodItem(foodItem);
  foodForm.reset();
  calculateCalories();
  // return false;
});

function addFoodItem(foodItem) {
  const foodItemElement = document.createElement('li');
  foodItemElement.textContent = `${foodItem.name}: ${foodItem.protein}g Protein, ${foodItem.carbs}g Carbs, ${foodItem.fats}g Fats`;
  foodList.appendChild(foodItemElement);
}
function addFoodItem(foodItem) {
  const foodItemElement = document.createElement('li');
  foodItemElement.textContent = `${foodItem.name}: ${foodItem.protein}g Protein, ${foodItem.carbs}g Carbs, ${foodItem.fats}g Fats`;
  foodList.appendChild(foodItemElement);
}
