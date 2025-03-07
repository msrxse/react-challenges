import { useEffect, useState } from 'react'
import { data } from './data'

interface Place {
  id: number
  title: string
  childPlaces: Place[]
}

type FlattenedPlace = Omit<Place, 'childPlaces'> & {
  childPlaces: number[]
}

function flattenToObject(place: Place, result: Record<number, FlattenedPlace> = {}) {
  result[place.id] = {
    id: place.id,
    title: place.title,
    childPlaces: place.childPlaces.map((place) => place.id),
  }

  if (place.childPlaces) {
    for (const child of place.childPlaces) {
      flattenToObject(child, result)
    }
  }
  return result
}

function fetchData(): Promise<Record<number, FlattenedPlace>> {
  const flattenedData = flattenToObject(data)
  return new Promise((resolve) => {
    setTimeout(() => resolve(flattenedData), 400)
  })
}

function PlaceTree({
  parentId,
  place,
  placesById,
  handleClick,
}: {
  parentId: number
  place: FlattenedPlace
  placesById: Record<number, FlattenedPlace>
  handleClick: (parentId: number, childId: number) => void
}) {
  return (
    <li>
      <div style={{ display: 'flex' }}>
        <p style={{ padding: '0 10px' }}>{place.title}</p>
        <button onClick={() => handleClick(parentId, place.id)}>Delete</button>
      </div>
      <ol>
        {place.childPlaces.map((childId) => {
          return (
            <PlaceTree
              parentId={place.id}
              key={childId}
              place={placesById[childId]}
              placesById={placesById}
              handleClick={handleClick}
            />
          )
        })}
      </ol>
    </li>
  )
}

function TravelPlan() {
  const [plan, setPlan] = useState<Record<number, FlattenedPlace>>()

  useEffect(() => {
    fetchData().then((d) => setPlan(d))
  }, [])

  function handleClick(parentId: number, childId: number) {
    if (plan) {
      const nextParent = {
        ...plan[parentId],
        childPlaces: plan[parentId].childPlaces.filter((id) => id !== childId),
      }

      setPlan({ ...plan, [parentId]: nextParent })
    }
  }

  if (!plan) {
    return <p>loading...</p>
  }

  const planetIds = plan[0].childPlaces
  return (
    <>
      <h1>TravelPlan</h1>
      <h2>plan to visit</h2>
      <ol>
        {planetIds.map((id) => {
          return (
            <PlaceTree
              key={id}
              parentId={0}
              place={plan[id]}
              placesById={plan}
              handleClick={handleClick}
            />
          )
        })}
      </ol>
    </>
  )
}

export default TravelPlan
