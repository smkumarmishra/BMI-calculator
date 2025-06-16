
        // BMI JS Calculation Formule??
/*
      Formula  of BMI = weight/height*height
*/

function bmiClick(){
    const Age=parseInt(document.getElementById("txtAge").value);
   
    const Weight=parseFloat(document.getElementById("txtWeight").value);
    
    const Height=parseFloat(document.getElementById("txtHeight").value); 

    // User Enter Correct digit (check input value correct or wrong)

    if (isNaN(Weight)|| isNaN(Age) || isNaN(Height) ||Age<=0 || Weight <= 0 || Height <= 0) {
        document.getElementById('bmiResult').innerText = "Please enter valid values for weight and height.";
        return;
      }
    
      // Convert height from cm to meters
      const heightInMeters = Height/ 100;

    //   calculate BMI

    const bmiValue= Weight/Height*2;

      // Determine BMI category
      let category = "";
      if (bmiValue < 18.5) {
        category = "Underweight";
      } else if (bmiValue >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
      } else if (bmiValue >= 25 && bmi <= 29.9) {
        category = "Overweight";
      } else {
        category = "Obesity";
      }

    //   Result section
     // Display result
      document.getElementById('bmiResult').innerText = `You are ${Age} Year, and Your BMI is ${bmiValue.toFixed(2)} (${category}).`



}
