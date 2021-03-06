var RecordStore = require( '../record_store' );
var Record = require('../record');
var Customer = require('../customer');
var assert = require('assert');
var Sale = require('../sale');


var record1;
var record2;
var record3;
var record4;
var record5;
var record6;
var recordStore;
var customer;
var sale;

  describe('Record Store', function(){

    beforeEach(function(){
      record1 = new Record("jimmy hendrix", "baby rock", 6.99, 4);
      record2 = new Record("martyn bennett", "hallaig", 6.99, 3);
      record3 = new Record("solar fields", "automatic sun", 9.99, 7);
      record4 = new Record("wardruna", "fehu", 7.99, 8);
      record5 = new Record("vibrasphere", "breathing place", 6.99, 6);
      record6 = new Record("gidge", "dusk", 6.99, 4);
      customer = new Customer("Pavlos", 100);
      recordStore = new RecordStore("Electric Pav's", "Portree", 1500);
      recordStore.addRecord(record1);
      recordStore.addRecord(record2);
      recordStore.addRecord(record3);
      recordStore.addRecord(record4);
      recordStore.addRecord(record5);
      recordStore.addRecord(record6);

    });

    it('should be able to store records', function(){
      assert.equal(6, recordStore.records.length);
    });

    it('should be able to list the inventory', function(){
      assert.deepEqual({ artist: "vibrasphere", album: "breathing place", price: 6.99, stock: 6 }, recordStore.findInventoryFor(record5));
    });

    it('should be able to sell a record', function(){
      recordStore.sellRecord(2, record2);
      assert.equal(1513.98, recordStore.bankBalance);
    });

    it('should be able to return total cash and value of inventory', function(){
      var report = recordStore.getInfo();
      assert.equal("stock value: 252.68, bank balance: 1500", report);
    });

    it('should be able to buy a certain number of records', function(){
      customer.buyRecords(1, record6);
      recordStore.sellRecord(1, record6);
      assert.equal(93.01, customer.cashBalance);
      assert.equal(1506.99, recordStore.bankBalance);
    });

  });
