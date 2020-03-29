function getHCF (a, b) {
    // Step1: if b is bigger than a, swap them, always make a > b
    if (b > a) {
        [a, b] = [b, a]
    }

    // Step2: Euclidean algorithm 辗转相除法
    while(b) {
        [a, b] = [b, a%b]
    }

    // Step3: return the HCF or GCD
    return a
}

console.log(getHCF(20,11))