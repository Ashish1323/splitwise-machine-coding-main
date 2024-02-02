# System Design for Splitwise App.

### User Class
- `userID`
- `userName`
- `balance`
  
#### Methods
- `addUser()`
- `createExpense()`
- `addPayment()`
- `calculateBalance()`

---

### Expense Class
- `expenseID`
- `description`
- `totalAmount`
- `creatorID`
- `participants`
  
#### Methods
- `addParticipantToExpense()`

---

### Payment Class
- `paymentID`
- `payerID`
- `receiverID`
- `amount`
