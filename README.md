Submission Instructions:

Your three assignments should be inside three separate folders in the root GitHub Repository.

The folders should be named as profile_card, calculator, and bank_app. Do not name your folder of your own choice.

You can only push your code until the deadline of the assignment. Any push after the deadline will be considered as Zero (0) in the whole assignment.

After completing all the projects, push your codes to GitHub.

Submit the public GitHub URL.

Ensure that your GitHub URL is accessible in a browser where your GitHub Account is not logged in.

1. Create a Personal Profile Card (30)

Create a personal profile card using HTML and CSS, ensuring it is visually appealing and centered both horizontally and vertically on the page.

You can take this as a sample if you do not know what is Profile Card:

https://i.ytimg.com/vi/OX7iWw5yA0U/maxresdefault.jpg

Requirements:

HTML Structure:

Create an HTML file with the basic structure (<!DOCTYPE html>, <html>, <head>, <title>, <body>).

CSS Styling:

Set a width and height for the card.

Add padding and margins to make it visually appealing.

Choose a background color or image for the card.

Apply rounded corners to the card.

Style the text inside the card, including the name, occupation, short description and contact details.

Experiment with different font sizes, colors, and alignments.

Vertical and Horizontal Middle Alignment:

Ensure the profile card is centered both horizontally and vertically on the page.

Include Content:

Profile card must include the following contents:

Name

Occupation

Short description

Contact information (email, mobile number)

2. Building a Calculator with Bootstrap UI (40)

Create a simple calculator application using HTML, CSS (Bootstrap for UI), and JavaScript. The calculator should allow users to input two numbers and select an arithmetic operation from a dropdown menu. Upon clicking the "Calculate" button, the calculator should display the result of the operation.

Requirements:

HTML Structure:

Use Bootstrap for creating the UI components (input fields, dropdown menu, button, result display).

Implement two input fields for entering numbers.

Include a dropdown menu for selecting arithmetic operations: addition (+), subtraction (-), multiplication (\*), and division (/).

Add a button labeled "Calculate" to trigger the calculation.

Include a section to display the result of the operation.

JavaScript Functionality:

Implement a JavaScript function to perform the calculation based on the user input.

Retrieve the numbers and the selected operation from the input fields and dropdown menu, respectively.

Handle cases where the user inputs non-numeric data or performs invalid operations gracefully by displaying appropriate error messages.

3. Bank Account Management Console Application: (30)

Create a JavaScript program that simulates a simple bank account management system using Object-Oriented Programming principles.

Requirements:

1. Create a ‘BankAccount’ class with the following properties:

accountNumber (a unique identifier for each account)

ownerName

balance

2. Implement the following methods in the ‘BankAccount’ class:

deposit(amount): Adds the specified amount to the account balance.

withdraw(amount): Subtracts the specified amount from the account balance. Ensure that the withdrawal amount does not exceed the available balance. Just show a message in the console: “Insufficient funds” if anyone tries to withdraw more than the available balance.

getBalance(): Returns the current balance of the account.

displayAccountInfo(): Displays the account information including account number, owner name, and balance:

For Example:

Account Number: 1001

Owner Name: John Doe

Balance: $700

3. Create two instances of the BankAccount class and demonstrate the functionality of the methods by depositing, withdrawing, and displaying account information.
