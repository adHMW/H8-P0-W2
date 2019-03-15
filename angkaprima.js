function angkaPrima(angka) {
  // you can only write your code here!
  
  var hasil = 0

  for(var i = 2; i < angka ; i++){
    // hasil += angka

   // dalem looping 
// 3 dibagi 2 = sisa 1 (true)
// 7 dibagi 2 = sisa 1 (true)
// 6 dibagi 2 = sisa 0 (false)
// 23 dibagi 2 = sisa 1 (true)
    if(angka % i === 0){
      return false
    }
  }
  return true
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(15)); // false