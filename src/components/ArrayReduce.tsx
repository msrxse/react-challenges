/**
 * Implement Array.prototype.reduce.
 * To avoid overwriting the actual Array.prototype.reduce, implement it as Array.prototype.myReduce.
 */
Array.prototype.myReduce = function (
  callback: Function,
  initialValue?: number,
): number | undefined {
  // Handle empty array case
  if (this.length === 0) {
    // throw new Error('Reduce of empty array with no initial value')
    console.log('Reduce of empty array with no initial value')
    return undefined
  }

  // Presume initial value is provided, change later if not
  let accumulator = initialValue
  let startIndex = 0

  // Handles cases where an initial value is given or not.
  if (!initialValue) {
    accumulator = this[0]
    startIndex = 1
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this)
  }
  return accumulator
}

function ArrayReduce() {
  // Test cases
  console.log(
    'Test Case 1:',
    [1, 2, 3].myReduce((prev, curr) => prev + curr, 0),
  ) // Should print 6
  console.log(
    'Test Case 2:',
    [1, 2, 3].myReduce((prev, curr) => prev + curr, 4),
  ) // Should print 10

  // Additional test cases
  console.log('\nAdditional Tests:')
  console.log('[].myReduce((a,b) => a+b)', JSON.stringify([].myReduce((a, b) => a + b))) // Should throw error
  console.log(
    '[1,2,3].myReduce((a,b) => a+b)',
    [1, 2, 3].myReduce((a, b) => a + b),
  ) // Should print 6
  console.log(
    '[1,2,3].myReduce((a,b) => a+b, 10)',
    [1, 2, 3].myReduce((a, b) => a + b, 10),
  ) // Should print 16

  return (
    <div>
      <p
        style={{
          textDecorationLine: 'underline',
        }}
      >
        Initialization
      </p>
      <ul>
        <li>Checks for empty array</li>
        <li>Default accumulator and startIndex as if initial value exists</li>
        <li>Adjusts startIndex and accumulator if initial value actually doesn't exists</li>
      </ul>
      <p style={{ textDecorationLine: 'underline' }}>Iteration</p>
      <ul>
        <li>Loop through the array of elements</li>
        <li>Calls callback with accumulator, current value, index and array</li>
        <li>Updates accumulator on each iteration</li>
      </ul>
    </div>
  )
}

export default ArrayReduce
