function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let N: number = 5;
console.log(`Factorial de ${N}:`, factorial(N));


// Julio Cáceres 
// Carne: 1549223