const compararNumeros = () => {
    const num1 = parseFloat(prompt("Introduce el primer número:"));
    const num2 = parseFloat(prompt("Introduce el segundo número:"));
    const num3 = parseFloat(prompt("Introduce el tercer número:"));
    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('resultado').textContent = "Por favor, introduce números válidos.";
        return;
    }
    
    const menor = (num1 < num2 && num1 < num3) ? num1 :
                  (num2 < num1 && num2 < num3) ? num2 : num3;

    const iguales = (num1 === num2) ? 'Número 1 y Número 2' :
                    (num1 === num3) ? 'Número 1 y Número 3' :
                    (num2 === num3) ? 'Número 2 y Número 3' :
                    'No hay números iguales';

    const resultado = `El menor número es: ${menor}. ${iguales} son iguales.`;
    document.getElementById('resultado').textContent = resultado;
}
