// Bank Account Class
class BankAccount {
  // Private property
  #balance = 0.0;

  // Constructor function
  constructor(name, accNum, balance) {
    this.accountNumber = accNum;
    this.ownerName = name;
    this.#balance = balance;
  }

  // Deposit method
  deposit(amount) {
    this.#balance += amount;
  }

  // Withdraw method
  withdraw(amount) {
    if (this.#balance > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds!");
    }
  }

  // Get balance method
  getBalance() {
    return `Balance: $${this.#balance.toFixed(2)}`;
  }

  // Display account information
  displayAccountInfo() {
    console.log(
      `Account Number: ${this.accountNumber} \nOwner Name: ${
        this.ownerName
      } \nBalance: $${this.#balance.toFixed(2)}`
    );
  }
}

const testAccOne = new BankAccount("John Haris", 10001, 100); // Creating new account object
console.log("First Account: ");
testAccOne.displayAccountInfo(); // Display account info
console.log(); // Blank line for decoration
testAccOne.deposit(45.99); // Deposits money
testAccOne.withdraw(200); // Withdraw fails due to insuffient balance
testAccOne.withdraw(35.5); // Withdraw success
console.log(testAccOne.getBalance()); // Shows balance after depositing and withdrwing
console.log(); // Blank line for decoration

console.log("Second Account: ");
const testAccTwo = new BankAccount("Abdul Karim", 10039, 300); // Creating new account object
testAccTwo.displayAccountInfo(); // Display account info
console.log(); // Blank line for decoration
testAccTwo.deposit(4998.75); // Deposits money
testAccTwo.withdraw(599.63); // Withdraw success
testAccTwo.withdraw(749.05); // Withdraw success
console.log(testAccTwo.getBalance()); // Shows balance after depositing and withdrwing
