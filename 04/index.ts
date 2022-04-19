const products: { produto: string, lote: number, ano: number, qtd: number } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

const tags = (products: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    let tag: string[] = [''];
    for (let i = 1; i <= products.qtd; i++) {
        tag.push(`${products.lote}-${products.ano}-${("000" + i).slice(-3)}`)
    }
    tag.shift()
    return tag
}

console.log(tags(products))