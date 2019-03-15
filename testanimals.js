function groupAnimals(animals) {
  // you can only write your code here!
  
  var a= animals.length
  var urut0 = []
  var urut1 = []
  var urut2 = []
  var hasil =0

  for(var i=0; i< a; i++){
    if (animals[i][0] === 'a'){
      urut0.push(animals[i])
    } if(animals[i][0] === 'c'){
      urut1.push(animals[i])
    } if(animals[i][0] === 'k'){
      urut2.push(animals[i])
    }
  }
return urut0 + urut1 + urut2
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]