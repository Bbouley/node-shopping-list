//test an id and see if it's already present in array

function testId(id, array){
  for (var i = 0; i < array.length; i++) {
    if(array[i] === id){
      return 'error';
    } else {
      return 'this is fine';
    }
  }
}
