import { useState } from 'react'
import './styles.css'

type ItemsStateItem = 'tick' | 'tack' | null
type ItemsStateRow = [ItemsStateItem, ItemsStateItem, ItemsStateItem]
type ItemsState = [ItemsStateRow, ItemsStateRow, ItemsStateRow]
type Status = 'Draw' | 'Tick is the winner' | 'Tack is the winner' | null
function TickTackToe() {
  const initialState: ItemsState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  const [active, setActive] = useState<ItemsStateItem>('tick')
  const [itemsState, setItemsState] = useState<ItemsState>(initialState)
  const [status, setStatus] = useState<Status>(null)

  function checkGameStatus(nextState: ItemsState) {
    // for (const row of nextState) {
    //   // Check rows winner
    //   if (row.every((cell) => cell === 'tick')) {
    //     return setStatus('Tick is the winner')
    //   } else if (row.every((cell) => cell === 'tack')) {
    //     return setStatus('Tack is the winner')
    //   }
    // }
    let result: Status = null
    for (let i = 0; i < nextState[0].length; i++) {
      for (let j = 0; j < nextState[0].length; j++) {
        console.log(nextState[i][j], i, j)

        if (
          nextState[i][0] !== null &&
          nextState[i][0] === nextState[i][1] &&
          nextState[i][1] === nextState[i][2]
        ) {
          result = `${nextState[i][0]} is the winner` as Status
        } else if (
          nextState[0][j] !== null &&
          nextState[0][j] === nextState[1][j] &&
          nextState[1][j] === nextState[2][j]
        ) {
          result = `${nextState[0][j]} is the winner` as Status
        }
      }
    }
    if (result === null) {
      if (
        nextState[0][0] !== null &&
        nextState[0][0] === nextState[1][1] &&
        nextState[1][1] === nextState[2][2]
      ) {
        result = `${nextState[0][0]} is the winner` as Status
      } else if (
        nextState[0][2] !== null &&
        nextState[0][2] === nextState[1][1] &&
        nextState[1][1] === nextState[2][0]
      ) {
        result = `${nextState[0][2]} is the winner` as Status
      }
    }
    setStatus(result)
  }

  function handleClick(id: [number, number]) {
    if (isNaN(id[0]) || isNaN(id[1])) {
      return
    }

    const nextState: ItemsState = itemsState.map((row, i) => {
      if (i === id[0]) {
        return row.map((cell, j) => {
          if (j === id[1]) {
            return active
          }
          return cell
        }) as ItemsStateRow
      }
      return row
    }) as ItemsState

    setItemsState(nextState)
    setActive(active === 'tick' ? 'tack' : 'tick')
    checkGameStatus(nextState)
  }

  return (
    <div className="tick-tack-toe-main">
      <div className="tick-tack-toe-toolbar ">
        <h3>Tick Tack Toe</h3>
        <p>{status}</p>
        <span>
          <button
            className={active === 'tick' ? 'active' : 'default'}
            onClick={() => setActive('tick')}
          >
            O
          </button>
          <button
            className={active === 'tack' ? 'active' : 'default'}
            onClick={() => setActive('tack')}
          >
            X
          </button>
        </span>
      </div>
      <div
        className="tick-tack-toe-grid"
        onClick={(e) => {
          const element = e.target as HTMLElement
          return handleClick([Number(element.id[0]), Number(element.id[1])])
        }}
      >
        <div id="00" className="tick-tack-toe-item">
          {itemsState[0][0]}
        </div>
        <div id="01" className="tick-tack-toe-item">
          {itemsState[0][1]}
        </div>
        <div id="02" className="tick-tack-toe-item">
          {itemsState[0][2]}
        </div>
        <div id="10" className="tick-tack-toe-item">
          {itemsState[1][0]}
        </div>
        <div id="11" className="tick-tack-toe-item">
          {itemsState[1][1]}
        </div>
        <div id="12" className="tick-tack-toe-item">
          {itemsState[1][2]}
        </div>
        <div id="20" className="tick-tack-toe-item">
          {itemsState[2][0]}
        </div>
        <div id="21" className="tick-tack-toe-item">
          {itemsState[2][1]}
        </div>
        <div id="22" className="tick-tack-toe-item">
          {itemsState[2][2]}
        </div>
      </div>
      <div className="tick-tack-toe-footer">
        <button
          onClick={() => {
            setItemsState(initialState)
            setStatus(null)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default TickTackToe
