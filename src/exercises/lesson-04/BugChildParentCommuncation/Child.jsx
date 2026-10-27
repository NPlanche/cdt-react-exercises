export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

//Child recieves a prop from the parent and calls it to update the parent counter.
