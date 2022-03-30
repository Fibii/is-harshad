const sumDigits = (x: number): number => {
    return x.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
}

export const isHarshad = (x: number): boolean => x % sumDigits(x) === 0

