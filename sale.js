var Sale = function(customer, store){
  this.customer = customer;
  this.store = store;
};


Sale.prototype = {
  tradeOff: function(quantity, record){
    this.customer.buyRecords(quantity, record);
    this.store.sellRecord(quantity, record);
  }
};


module.exports = Sale;
