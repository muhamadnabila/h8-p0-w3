function balikString(kata){

    var a = kata.length;
    var b = '';
    for (a; a >= 1 ; a--){
        b = b + kata[a-1]
    }return b

}
console.log(balikString('hello world'))