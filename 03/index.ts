const values: number[] = [1, 5, 2]

const multiplication = (values: number[]): string => {
    let multiplier: number = 0;
    let results: string = ''

    if (!values.length) return ''

    values.forEach((value: number) => {
        while (multiplier <= 10) {
            results += `${value} X ${multiplier} = ${value * multiplier} \n`
            multiplier++
        }
        multiplier = 0
    })

    return results
}

console.log(multiplication(values))