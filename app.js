const proteinInput = document.getElementById('protein');
const carbInput = document.getElementById('carb');
const fatInput = document.getElementById('fat');
const caloriesDisplay = document.querySelector('.calories-display');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  const protein = proteinInput.value * 4;
  const carb = carbInput.value * 4;
  const fat = fatInput.value * 9;
  console.log(protein, carb, fat);
  const totalCalories = protein + carb + fat;
  console.log(totalCalories);
  caloriesDisplay.textContent = `Your total calories for the day are ${totalCalories} calories. `;
});
