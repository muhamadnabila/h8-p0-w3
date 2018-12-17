function groupAnimals(animals) {
    var kamus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
   // console.log(kamus[0])
    var temp = []
    var result = []
    for ( var i = 0; i < kamus.length; i++){
        for ( var j = 0; j < animals.length; j++){ 
            if (animals[j][0] === kamus[i][0]){
                  temp.push(animals[j])
            }  
        }
        if ( temp.length > 0){
            result.push(temp)
        }
        temp =[]       
    }
    return result
}
  
  // TEST CASES
  console.log(groupAnimals(['facing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]