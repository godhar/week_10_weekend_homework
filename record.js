var Record = function(artist, album, price, quantity){
  this.artist = artist;
  this.album = album;
  this.price = price;
  this.quanity = quantity;
  this.balance = 0;
}

module.exports = Record;