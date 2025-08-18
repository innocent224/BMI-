// Select elements
const ageInput = document.getElementById("age");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const maleBtn = document.getElementById("male");
const femaleBtn = document.getElementById("female");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const bmiResult = document.getElementById("bmi-result");
const healthStatus = document.getElementById("health-status");

let selectedGender = null;

// Gender selection
maleBtn.addEventListener("click", () => {
  selectedGender = "Male";
  maleBtn.style.backgroundColor = "#2196F3";
  maleBtn.style.color = "#fff";
  femaleBtn.style.backgroundColor = "";
  femaleBtn.style.color = "";
});

femaleBtn.addEventListener("click", () => {
  selectedGender = "Female";
  femaleBtn.style.backgroundColor = "#E91E63";
  femaleBtn.style.color = "#fff";
  maleBtn.style.backgroundColor = "";
  maleBtn.style.color = "";
});


function calculateBMI() {
      let height = document.getElementById("height").value;
      let weight = document.getElementById("weight").value;

      if (height === "" || weight === "") {
        alert("Please enter both height and weight!");
        return;
      }

      let h = height / 100; // convert cm to meters
      let bmi = (weight / (h * h)).toFixed(2);

      document.getElementById("bmi-result").textContent = bmi;

      let status = "";
      if (bmi < 18.5) {
        status = "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal weight";
      } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
      } else {
        status = "Obese";
      }

      document.getElementById("health-status").textContent = status;
    }


// Reset button
resetBtn.addEventListener("click", () => {
  ageInput.value = "";
  heightInput.value = "";
  weightInput.value = "";
  bmiResult.textContent = "0.00";
  healthStatus.textContent = "";

  maleBtn.style.backgroundColor = "";
  maleBtn.style.color = "";
  femaleBtn.style.backgroundColor = "";
  femaleBtn.style.color = "";
  selectedGender = null;
});









//     // BMI Calculation
// calculateBtn.addEventListener("click", () => {
//   const age = parseInt(ageInput.value);
//   const height = parseFloat(heightInput.value);
//   const weight = parseFloat(weightInput.value);

//   if (!age || !height || !weight || !selectedGender) {
//     alert("⚠️ Please fill in all fields and select your gender.");
//     return;
//   }

//   if (height <= 0 || weight <= 0 || age <= 0) {
//     alert("⚠️ Please enter valid positive numbers.");
//     return;
//   }

//   // Convert height from cm to meters
//   const heightInMeters = height / 100;

//   // BMI Formula
//   const bmi = weight / (heightInMeters * heightInMeters);

//   // Display BMI with 2 decimals
//   bmiResult.textContent = bmi.toFixed(2);

//   // Determine health status
//   let status = "";
//   if (bmi < 18.5) {
//     status = "Underweight";
//     healthStatus.style.color = "#2196F3";
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     status = "Normal weight";
//     healthStatus.style.color = "#4CAF50";
//   } else if (bmi >= 25 && bmi < 29.9) {
//     status = "Overweight";
//     healthStatus.style.color = "#FF9800";
//   } else {
//     status = "Obese";
//     healthStatus.style.color = "#F44336";
//   }

//   // Show result
//   healthStatus.textContent = status;
// });