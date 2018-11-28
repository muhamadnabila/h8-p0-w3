function balikString(kata){

    var b = '';
    for (var a= kata.length; a >= 1 ; a--){
        b = b + kata[a-1]
    }return b

}
console.log(balikString('hello world'))