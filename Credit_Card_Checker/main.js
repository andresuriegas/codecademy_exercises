// PROJECT GOALS
// Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. 
// In this project, you have the role of a clerk who checks if credit cards are valid. 
// Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time.
// Unlike the other clerks, you can spend the rest of your time relaxing!

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// Luhn algorithm function validatecard takes as a parameter an array.
const validateCred = (array) => {
    let numSum = 0; // Define a variable for the sum of the digits.
    for (let i = array.length - 1; i >= 0; i--) { // For loop that starts at the last digit of the array and iterates to the left
        let currValue = array[i] // Variable for the current value of the index inside the array
        if ((array.length - 1 - i) % 2 === 1) { // If the index is reminder is equal to 1 i.e. the number is even
          currValue *= 2;
          if (currValue > 9) { // If the douled value is larger than 9 then substract 9 to the current value
            currValue -= 9;
          }
        }
        numSum += currValue;
      }
    
      return numSum % 10 === 0;};

// Test function:

console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false


// Find invalid cards function iterates over elents of the multidimenswional array batch.

const findInvalidCards = (batch) => {
    const invalidCreditCards = [];

    for (let i = 0; i < batch.length; i++){ // For loop the outer array.
        let currentCred = batch[i];
        if (!validateCred(currentCred)) { // If the array i inside batch returns false when evaluated inside the validateCred function, then the array is added into invalidCreditCards
            invalidCreditCards.push(currentCred);
        }   
    }
    return invalidCreditCards;
}

// Test function:
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); // Shouldn't print anythig
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the invalid nummbers

console.log(findInvalidCards(batch));

// Function to find the credit card company of the invalid cards


const idInvalidCardCompanies = (invalidArray) => {
    let companies = [];
    for (let i = 0; i <invalidArray.length; i++){
        switch (invalidArray[i][0]) {
            case 3:
                if (companies.indexOf('Amex') === -1){
                    companies.push('Amex');
                }
                break
            case 4:
                if (companies.indexOf('Visa') === -1){
                    companies.push('Visa');
                }
                break
            case 5:
                if (companies.indexOf('Mastercard') === -1){
                    companies.push('Mastercard');
                }
                break
            case 6:
                if (companies.indexOf('Discover') === -1){
                    companies.push('Discover');
                }
                break
            default:
                console.log('Company not found.');
            }
    }
    return companies;
}

console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards

