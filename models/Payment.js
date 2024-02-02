class Payment {
    constructor(paymentID, payerID, receiverID, amount) {
      this.paymentID = paymentID;
      this.payerID = payerID;
      this.receiverID = receiverID;
      this.amount = amount;
    }
  }

module.exports = Payment;