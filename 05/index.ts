const word: string = 'programador';

const separator = (word: string): string => {
    let spell: string = ''

    for (let i = 0; i < word.length; i++) {
        spell += `${word[i]}${i !== word.length - 1 ? '-' : ''}`
    }

    return spell
}

console.log(separator(word))