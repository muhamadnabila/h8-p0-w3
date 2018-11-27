function dataHandling(parameter){
   
    
    var j = parameter.length-1
    for (var i = 0; i <= j; i++){
         
        console.log('Nomor ID: ' + parameter[i][0])
        console.log('Nama Lengkap: ' + parameter[i][1])
        console.log('Ttl: ' + parameter[i][2]+ parameter[i][3])
        console.log('Hobi: ' + parameter[i][4])
        console.log('')
    
        
        
    } 
    
    
}
dataHandling([
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
])