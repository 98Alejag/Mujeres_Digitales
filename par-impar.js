const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese un número: ', (num) => {
    if (isNaN(num)) {
        console.log('Por favor, ingrese un número válido.');
    } else {
        if (num % 2 === 0) {
            console.log(`El número ${num} es par.`);
        } else {
            console.log(`El número ${num} es impar.`);
        }  
    }
    rl.close();
});

// Para ejecutar este código, guárdalo en un archivo llamado par-impar.js y usa el comando `node par-impar.js` en tu terminal.