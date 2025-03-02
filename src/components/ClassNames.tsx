/**
 * Implement the classnames function
 * classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together.
 */
type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined
type ClassArray = ClassValue[]
type ClassDictionary = Record<string, any>

function classnames(...args: ClassValue[]) {
  const classes: string[] = []

  args.map((arg) => {
    if (!arg) {
      return
    }

    const argType = typeof arg

    if (argType === 'string' || argType === 'number') {
      classes.push(String(arg))
      return
    }

    if (Array.isArray(arg)) {
      classes.push(classnames(...arg))
      return
    }

    if (typeof arg === 'object') {
      for (const key in arg) {
        // Only process non-inherited keys
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key)
        }
      }
      return
    }
  })

  return classes.join(' ')
}

function Classnames() {
  // Arrays will be recursively flattened as per the rules above
  console.log(classnames('a', ['b', { c: true, d: false }])) // 'a b c')

  // Falsey values are ignored
  console.log(classnames(null, false, 'bar', undefined, { baz: null }, '')) // 'bar'

  return (
    <div>
      <p>Questions to ask</p>
      <ul>
        <li>
          Can there be duplicated classes in the input? Should the output contain duplicated
          classes?
        </li>
        <li>
          What if a class was added and then later turned off?
          {/* E.g. classNames('foo', { foo: false }) */}
        </li>
      </ul>
    </div>
  )
}

export default Classnames
