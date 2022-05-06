import assert from 'assert'
import removeRussianStressMarks from './index.js'

const examples = [
  ['бы́ло', 'было'],
  ['Ёлка', 'Елка']
]

for (const [input, expected] of examples) {
  assert.equal(removeRussianStressMarks(input), expected, input)
}
