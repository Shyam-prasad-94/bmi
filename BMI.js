
// weight
let wei = document.getElementById("weight");
// height
let hei = document.getElementById("height");
// calculate
let cal = document.getElementById("calculate");
// div
let resultDiv = document.getElementById("div");
//chart
let bmichart = document.getElementById("chart");
//calculate
cal.onclick = () => {
    // getting values from input fields
    var weight = parseFloat(wei.value);
    var heightCm = parseFloat(hei.value);
    // input validation
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        resultDiv.innerText = "Please enter valid positive numbers for weight and height.";
        return;
    }
    // convert height into meters
    let heightM = heightCm / 100;
    // calculate bmi
    let bmi = weight / (heightM * heightM);
    let category = "";
    let color = "";
    
    // determine category
    if (bmi < 18.5) {
        category = "Underweight";
        color = "#fffac8";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
        color = "#d9fcd9";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        color = "#ffe0b3";
    } else {
        category = "Obesity";
        color = "#ff9999";
    }


    // display resultDiv
    resultDiv.innerHTML = `<p>Your BMI is <strong>${bmi.toFixed(3)}</strong> - <strong>${category}</strong></p>`;
    resultDiv.style.backgroundColor = color;
    chart.innerHTML = `<p>
        <h3>BMI Chart</h3>
        <table cellpadding="10">
            <tr>
                <th>BMI</th>
                <th>Category</th>
            </tr>
            <tr style="background-color: #fffac8">
                <td>Less than 18.5</td>
                <td>Underweight</td>
            </tr>
            <tr style="background-color: #d9fcd9">
                <td>18.5 – 24.9</td>
                <td>Normal Weight</td>
            </tr>
            <tr style="background-color: #ffe0b3">
                <td>25 – 29.9</td>
                <td>Overweight</td>
            </tr>
            <tr style="background-color: #ff9999">
                <td>30 and above</td>
                <td>Obesity</td>
            </tr>
        </table>

        </p>`

};

