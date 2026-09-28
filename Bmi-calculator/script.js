// 2. Declare and initialize variables

const personName = "Martins";
const weightKg = 75;
const heightM = 1.75;


// 3. Perform arithmetic operations

const heightSquared = heightM * heightM;

const bmi = weightKg / heightSquared;


// 4. Perform comparison operations

const isUnderweight = bmi < 18.5;

const isNormalWeight = bmi >= 18.5 && bmi < 25;

const isOverweight = bmi >= 25;


// 5. Perform logical operations

const isHighRisk = isOverweight || weightKg > 90;


// 6. Display the results

console.log("Name:", personName);

console.log("BMI:", bmi.toFixed(2));

console.log("Underweight:", isUnderweight);

console.log("Normal Weight:", isNormalWeight);

console.log("Overweight:", isOverweight);

console.log("High Risk Alert:", isHighRisk);