function palindrome(kata) {

    var tampung = ''
   for (var i=kata.length ; i >= 1 ; i--){
       tampung += kata[i-1]

      } if (tampung === kata){
        return true
    } else {
        return false
    }

   
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false