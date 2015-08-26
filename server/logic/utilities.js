//test an id and see if it's already present in array

function getID(ID, array){
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== ID){
      return ({
        message : 'doesn\'t exist bro!'
      });
    } else {
      return ({
        message : 'this is fine',

      });
    }
  }
}

function deleteID(ID, arrayItems, array){
  for (var i = 0; i < arrayItems.length; i++) {
    if(arrayItems[i].id === ID){
      arrayItems.splice(i, 1);
      for (var j = 0; j < arrayItems.length; j++) {
        arrayItems[j].id = j;
      }
      array.id -= 1;
      return ({
          message : 'done'
        });
      }
    }
      return ({
        message: 'wrong ID buddy!'
      });
  }

module.exports = {
  deleteID : deleteID,
};
