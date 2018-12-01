function groupAnimals(animals) {
    result = []
   for (i=0 ; i < animals.length ; i++){
       var hurufA = []
       var hurufC = []
       var hurufK = []
       var hurufU = []

       for (j=0; j < animals.length ; j++){
           if (animals[j][0]=== 'a'){
               hurufA.push(animals[j])    
           } else if(animals[j][0]==='k' ){
               hurufK.push(animals[j])
           } else if(animals[j][0]=== 'u' ){
               hurufU.push(animals[j])
           } else if(animals[j][0]=== 'c' ){
            hurufC.push(animals[j])
           }
       }
   }
   result.push(hurufA,hurufC,hurufK,hurufU)
   return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]