const vowels = ['а', 'е', 'и', 'о', 'у', 'ы', 'ю', 'э', 'я']

export default function (text) {
  for (const vowel of vowels) {
    replaceUpperAndLowerCase(vowel + '\u0300'/* grave */, vowel)
    replaceUpperAndLowerCase(vowel + '\u0301'/* acute */, vowel)
  }
  replaceUpperAndLowerCase('ё', 'е')
  return text

  function replaceUpperAndLowerCase (from, to) {
    text = text
      .replace(new RegExp(from, 'g'), to)
      .replace(new RegExp(from.toUpperCase(), 'g'), to.toUpperCase())
  }
}
