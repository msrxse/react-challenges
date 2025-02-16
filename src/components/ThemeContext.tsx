import { createContext, useContext, useState, useMemo } from 'react'

interface ThemeContextProps {
  theme: string
  setTheme: (arg: string) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => null,
})

/**
 * Build example app using theme context
 */
const App = () => {
  const [theme, setTheme] = useState('light')
  // Whenever the app rerenders, functions will be a different object pointing at a different function,
  // so React will have to rerender all components deep in the tree

  // In smaller apps you dont need to memoize. However, there is no need to re-render them if the underlying data, has not changed.
  // To help React take advantage of this, you may wrap functions with useCallback and wrap the object creation into useMemo
  const value = useMemo(() => ({ theme, setTheme }), [theme]) // but if the fn is the useState setter, have it on the useMemo instead

  return (
    <ThemeContext.Provider value={value}>
      <ExampleComponent />
    </ThemeContext.Provider>
  )
}

const ExampleComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className={theme === 'light' ? 'lightClass' : 'darkClass'}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
      <p style={{ color: theme === 'light' ? 'white' : 'black' }}>Theme provider example</p>
    </div>
  )
}

export default App
