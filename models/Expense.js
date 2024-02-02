class Expense{
    constructor(expenseID, desc, totalAmount, creatorID){
        this.expenseID=expenseID;
        this.desc=desc;
        this.totalAmount = totalAmount;
        this.creatorID=creatorID;
        this.participants = {}; // Map of userID to their share in the expense
    }
  
    addParticipant(userID, share) {
      this.participants[userID] = share;
    }
}

module.exports = Expense;