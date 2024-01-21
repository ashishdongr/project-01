const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get height and weight values
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);

    // Get the results element
    const resultsElement = document.querySelector('#results');

    // Check if height or weight is not a number or less than 0
    if (isNaN(height) || isNaN(weight) || height < 0 || weight < 0) {
        // Display an error message
        resultsElement.innerHTML = "<p>Please enter valid height and weight values.</p>";
    } else {
        // Perform BMI calculation
        const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

        // Display the results
        resultsElement.innerHTML = "<p>Your BMI is: " + bmi + "</p>";

        // Display weight guide based on BMI
        const weightGuideElement = document.querySelector('#weight-guide');
        if (bmi < 18.6) {
            weightGuideElement.innerHTML = "<h3>BMI Weight Guide</h3><p>Under Weight = less than 18.6</p>";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            weightGuideElement.innerHTML = "<h3>BMI Weight Guide</h3><p>Normal Range = 18.6 and 24.9</p>";
        } else {
            weightGuideElement.innerHTML = "<h3>BMI Weight Guide</h3><p>Overweight = Greater than 24.9</p>";
        }
    }
});
