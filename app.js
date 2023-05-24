let proteinGoal = 0;
let carbsGoal = 0;
let fatsGoal = 0;

const goalsForm = document.getElementById('goalsForm');
const foodForm = document.getElementById('foodForm');
const foodList = document.getElementById('foodList');

goalsForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('form submitted');
  proteinGoal = parseFloat(document.getElementById('proteinInput').value);
  carbsGoal = parseFloat(document.getElementById('carbsInput').value);
  fatsGoal = parseFloat(document.getElementById('fatsInput').value);
  console.log(proteinGoal, carbsGoal, fatsGoal);
  calculateCalories();
});
function calculateCalories() {
  const totalCalories = proteinGoal * 4 + carbsGoal * 4 + fatsGoal * 9;
  document.getElementById('totalCalories').textContent = totalCalories;
}
