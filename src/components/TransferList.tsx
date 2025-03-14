import { useState } from 'react'
/**
 *
 * Build a component that allows transferring of items between two lists.
 */
interface InitialStateProps {
  id: string
  group: number
  label: string
  checked: boolean
}
type Directive = 'left' | 'right' | 'allLeft' | 'allRight'

interface ItemsListProps {
  item: InitialStateProps
  handleOnChange: (item: InitialStateProps) => void
}
function ItemsList({ item, handleOnChange }: ItemsListProps) {
  return (
    <div>
      <input
        id={item.label}
        type="checkbox"
        checked={item.checked}
        onChange={(e) =>
          handleOnChange({
            ...item,
            checked: e.target.checked,
          })
        }
      />
      <label htmlFor={item.label}>{item.label}</label>
    </div>
  )
}

function TransferList() {
  const initialState = [
    { id: '1', group: 1, label: 'HTML', checked: false },
    { id: '2', group: 1, label: 'JavaScript', checked: false },
    { id: '3', group: 1, label: 'CSS', checked: false },
    { id: '4', group: 1, label: 'TypeScript', checked: false },
    { id: '5', group: 2, label: 'React', checked: false },
    { id: '6', group: 2, label: 'Angular', checked: false },
    { id: '7', group: 2, label: 'Vue', checked: false },
    { id: '8', group: 2, label: 'Svelte', checked: false },
  ]

  const [items, setItems] = useState<InitialStateProps[]>(initialState)

  const handleOnChange = (item: InitialStateProps) => {
    const result = items.map((each) => {
      if (each.id === item.id) {
        return item
      }
      return each
    })
    setItems(result)
  }
  const checkCheckedRight = () => !items.some((each) => each.group == 1 && each.checked)
  const checkCheckedLeft = () => !items.some((each) => each.group == 2 && each.checked)
  const handleSend = (directive: Directive) => {
    const result = items.map((item) => {
      if (directive === 'left' && item.group === 2 && item.checked) {
        return {
          ...item,
          group: 1,
        }
      }
      if (directive === 'allLeft' && item.group === 2) {
        return {
          ...item,
          group: 1,
        }
      }
      if (directive === 'right' && item.group === 1 && item.checked) {
        return {
          ...item,
          group: 2,
        }
      }
      if (directive === 'allRight' && item.group === 1) {
        return {
          ...item,
          group: 2,
        }
      }
      return item
    })
    setItems(result)
  }

  return (
    <div>
      <h1>TransferList</h1>
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '200px', border: '1px solid gray' }}>
            {items.map((item) => {
              if (item.group === 1) {
                return <ItemsList key={item.id} item={item} handleOnChange={handleOnChange} />
              }
            })}
          </div>
          <div
            style={{
              width: '100px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <button onClick={() => handleSend('allLeft')}>{'<<'}</button>
            <button disabled={checkCheckedLeft()} onClick={() => handleSend('left')}>
              {'<'}
            </button>
            <button disabled={checkCheckedRight()} onClick={() => handleSend('right')}>
              {'>'}
            </button>
            <button onClick={() => handleSend('allRight')}>{'>>'}</button>
          </div>
          <div style={{ width: '200px', border: '1px solid gray' }}>
            {items.map((item) => {
              if (item.group === 2) {
                return <ItemsList key={item.id} item={item} handleOnChange={handleOnChange} />
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransferList
