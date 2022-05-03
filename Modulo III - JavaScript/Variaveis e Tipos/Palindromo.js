function verificaPalindromo(string){
    if(!string) return "nada";

    else if( string.split("").reverse().join("") === string){
        return string + ' é um palindromo';
        let a = 2;
       
    };
}

console.log(verificaPalindromo("as"));
//////////////////////////////////////////////

function verificaPalindromo2(string){
    if(!string) return "string inexistente";
    for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]){
            return 'oloco bixo';
        }

    }
    return "eita meu essa fera ai"
}

console.log(verificaPalindromo2('jean'))

