const readline = require("readline");

class BankAccount {

    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log("Amount deposited successfully.");
        } else {
            console.log("Invalid amount.");
        }
    }

    // Withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("Amount withdrawn successfully.");
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    }

    // Display balance
    checkBalance() {
        console.log("Current Balance: Rs. " + this.balance);
    }

    // Display account details
    displayDetails() {
        console.log("\n===== ACCOUNT DETAILS =====");
        console.log("Account Number: " + this.accountNumber);
        console.log("Account Holder: " + this.accountHolder);
        console.log("Balance: Rs. " + this.balance);
    }
}


// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Create bank account
const account = new BankAccount("10245", "Rahul", 10000);


// Function to display menu
function showMenu() {

    console.log("\n===== BANK ACCOUNT SYSTEM =====");
    console.log("1. Deposit");
    console.log("2. Withdraw");
    console.log("3. Check Balance");
    console.log("4. Account Details");
    console.log("5. Exit");

    rl.question("Enter your choice: ", function(choice) {

        switch (Number(choice)) {

            case 1:
                rl.question("Enter deposit amount: ", function(amount) {
                    account.deposit(Number(amount));
                    showMenu();
                });
                break;

            case 2:
                rl.question("Enter withdrawal amount: ", function(amount) {
                    account.withdraw(Number(amount));
                    showMenu();
                });
                break;

            case 3:
                account.checkBalance();
                showMenu();
                break;

            case 4:
                account.displayDetails();
                showMenu();
                break;

            case 5:
                console.log(
                    "Thank you for using the Bank Account System."
                );
                rl.close();
                break;

            default:
                console.log("Invalid choice.");
                showMenu();
        }
    });
}


// Start program
if (process.argv.includes("--demo")) {

    console.log("===== BANK ACCOUNT SYSTEM - DEMO =====");

    const demoAccount = new BankAccount("10245", "Rahul", 10000);

    console.log("\nInitial Balance:");
    demoAccount.checkBalance();

    console.log("\nDepositing Rs. 5000...");
    demoAccount.deposit(5000);

    console.log("\nWithdrawing Rs. 2500...");
    demoAccount.withdraw(2500);

    console.log("\nFinal Balance:");
    demoAccount.checkBalance();

    console.log("\nAccount Details:");
    demoAccount.displayDetails();

} else {

    showMenu();
}