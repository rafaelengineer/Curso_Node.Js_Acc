const stdin = process.openStdin()

function main() {
    return new Promise( function(resolve, reject){
        stdin.addListener('data', function (value) {
            //console.log(`Voce digitou:  ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}

main().then( function(resultado) {
    console.log(`resultado:  ${resultado.toString()}`);
})