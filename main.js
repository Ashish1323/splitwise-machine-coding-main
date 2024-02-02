const User= require('./models/User');
const Expense= require('./models/Expense');
const Payment= require('./models/Payment');


class Splitwise {
    constructor() {
      this.users = {}; // Map of userID to User
      this.expenses = {}; // Map of expenseID to Expense
      this.payments = {}; // Map of paymentID to Payment
    }
  
    addUser(userID, userName) {
      this.users[userID] = new User(userID, userName);
    }

    createExpense(expenseID, description, totalAmount, creatorID) {
        this.expenses[expenseID] = new Expense(expenseID, description, totalAmount, creatorID);
    }

    addParticipantToExpense(expenseID, userID) {
        var currentExpense=this.expenses[expenseID];
        for(let i=0;i<userID.length;i++){
            currentExpense.addParticipant(userID[i],currentExpense.totalAmount/userID.length);
            this.users[userID[i]].balance += currentExpense.totalAmount/userID.length;
        }
      }
        
    addPayment(paymentID, payerID, receiverID, amount) {
        this.payments[paymentID] = new Payment(paymentID, payerID, receiverID, amount);
        this.users[payerID].balance -= amount;
        this.users[receiverID].balance += amount;
      }
    
    calculateBalance(userID) {
        return this.users[userID].balance;
    }

}

var splitwise = new Splitwise();
splitwise.addUser(1, "Ashish");
splitwise.addUser(2, "Vishad");
splitwise.addUser(3, "Alpesh");


splitwise.createExpense(101, "Fafa ka pajama", 100, 1);
splitwise.addParticipantToExpense(101,[2,3]);

splitwise.addPayment(201, 2, 1, 40);
splitwise.addPayment(202, 3, 1, 40);


console.log(splitwise.users)
console.log(splitwise.expenses)
