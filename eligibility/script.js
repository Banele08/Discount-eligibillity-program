// script.js

function checkEligibility() {
    // Retrieve values from the form inputs
    let age = parseInt(document.getElementById('age').value);
    let isMember = document.getElementById('membership').checked;

    // Initialize variables to store eligibility results
    let seniorDiscount = false;
    let memberDiscount = false;

    // Check for Senior Discount criteria
    if (age >= 65) {
        seniorDiscount = true;
    }

    // Check for Member Discount criteria
    if (age >= 18 && isMember) {
        memberDiscount = true;
    }

    // Display the result based on eligibility
    let resultElement = document.getElementById('result');
    if (seniorDiscount) {
        resultElement.textContent = 'Congratulations! You qualify for a Senior Discount.';
    } else if (memberDiscount) {
        resultElement.textContent = 'Congratulations! You qualify for a Member Discount.';
    } else {
        resultElement.textContent = 'Sorry, you do not qualify for any discount at this time.';
    }
}
