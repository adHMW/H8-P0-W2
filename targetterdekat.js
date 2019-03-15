function targetTerdekat(arr) {
  // you can only write your code here!
 
 //var a = arr.length

 var hasil2 = 0
 var hasil1 = 0
 var total = 0
 var tampunghasil2 = []
 var subtotal = []
  
  if(!arr.includes('x')){
        return 0;
    }
    else{
    
      for( var i=0; i < arr.length; i++){
        if (arr[i]=='o'){
            hasil1 = i
            //return hasil1
            // console.log('o = ' + hasil1)
        }
        
        if (arr[i]=='x'){
            hasil2 = i
            tampunghasil2.push(hasil2)
            //return hasil2
        }

      }
    }
  // console.log('x = ' + tampunghasil2)
  

    for (i=0; i < tampunghasil2.length; i++){
      total = Math.abs(tampunghasil2[i]- hasil1)
      subtotal.push(total)
    }
    
    subtotal.sort(function(a,b){return a - b });

    return subtotal[0]

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2