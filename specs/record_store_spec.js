var RecordStore = require( '../record_store' );
var Record = require('../record');
var assert = require('assert');


var record1;
var record2;
var record3;
var record4;
var record5;
var record6;
var recordStore;

  describe('Record Store', function(){

    beforeEach(function(){
      record1 = new Record("jimmy hendrix", "baby rock", 6.99, 4);
      record2 = new Record("martyn bennett", "hallaig", 6.99, 3);
      record3 = new Record("solar fields", "automatic sun", 9.99, 7);
      record4 = new Record("wardruna", "fehu", 7.99, 8);
      record5 = new Record("vibrasphere", "breathing place", 6.99, 6);
      record6 = new Record("gidge", "dusk", 6.99, 4);
      recordStore = new RecordStore("Electric Pav's", "Portree", 1500);
      recordStore.addRecord(record1);
      recordStore.addRecord(record2);
      recordStore.addRecord(record3);
      recordStore.addRecord(record4);
      recordStore.addRecord(record5);
      recordStore.addRecord(record6);

    });

    it('should be able to store records', function(){
      assert.equal(6,  recordStore.records.length);
    });

    it('should be able to list the inventory', function(){
      assert.equal({"vibrasphere", "breathing place", 6.99 : 6}, recordStore.findInventoryFor(record5));
    })

    it('should be able to find records by name', function(){
      var total = recordStore.sellRecord("gidge");
      assert.equal( 1458.06, recordStore.bankBalance)
    })

  });
