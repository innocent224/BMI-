// BMI calculation
document.getElementById("calculate").addEventListener("click", function() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let bmiValue = document.getElementById("bmi-value");
  let healthStatus = document.getElementById("health-status");

  if (height > 0 && weight > 0) {
    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    bmiValue.textContent = bmi;

    if (bmi < 18.5) {
      healthStatus.textContent = "Underweight";
      healthStatus.style.color = "orange";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      healthStatus.textContent = "Normal weight";
      healthStatus.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
      healthStatus.textContent = "Overweight";
      healthStatus.style.color = "darkorange";
    } else {
      healthStatus.textContent = "Obesity";
      healthStatus.style.color = "red";
    }
  } else {
    alert("Please enter valid height and weight values!");
  }
});

// Gender toggle
const maleBtn = document.getElementById("male");
const femaleBtn = document.getElementById("female");

maleBtn.addEventListener("click", function() {
  maleBtn.classList.add("active");
  femaleBtn.classList.remove("active");
});

femaleBtn.addEventListener("click", function() {
  femaleBtn.classList.add("active");
  maleBtn.classList.remove("active");
});

// Reload button (reset form)
document.getElementById("reload-btn").addEventListener("click", function() {
  document.getElementById("age").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("bmi-value").textContent = "0.00";
  document.getElementById("health-status").textContent = "";
  maleBtn.classList.remove("active");
  femaleBtn.classList.remove("active");
});