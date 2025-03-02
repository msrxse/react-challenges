/**
 * Implement a function flatten that returns a newly-created array with all
 * sub-array elements concatenated recursively into a single level
 */
import React from 'react'

function flatten(value: number[]) {
  const result = []
  const copy = value.slice()

  while (copy.length) {
    const item = copy.shift()
    if (Array.isArray(item)) {
      copy.unshift(...item)
    } else {
      result.push(item)
    }
  }

  return result
}

function Flatten() {
  // Single-level arrays are unaffected.
  console.log(flatten([1, 2, 3])) // [1, 2, 3]

  // Inner arrays are flattened into a single level.
  console.log(flatten([1, [2, 3]])) // [1, 2, 3]
  console.log(
    flatten([
      [1, 2],
      [3, 4],
    ]),
  ) // [1, 2, 3, 4]

  // Flattens recursively.
  console.log(flatten([1, [2, [3, [4, [5]]]]])) // [1, 2, 3, 4, 5]

  return (
    <div>
      <p>Clarification Questions</p>
      <ul>
        <li>
          What type of data does the array contain? Some approach only applies to certain data
          types.
        </li>
        <li>
          How many levels of nesting can this array have? If there are thousands-of-levels of
          nesting, recursion might not be a good idea given its big upfront memory footprint.
        </li>
        <li>Should we return a new array or we mutate the existing array?</li>
        <li>
          Can we assume valid input, i.e. an array. Normally the answer is "yes", so you don't have
          to waste your time doing defensive programming.
        </li>
        <li>
          Does the environment the code runs on has ES6+ support? The environment determines what
          methods/native APIs you have access to.
        </li>
      </ul>
    </div>
  )
}

export default Flatten
