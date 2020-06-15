import React, {useState} from 'react'

function Contador() {

    const [count, setCount] = useState(0);
    return (
        <div className="App">
        <h3>contador</h3>
        <p> {count} KM </p>
        {count <= 0 ? (
          <button className="btn btn-info"  onClick={() => setCount(count + 1)}>contar</button>
        ) : (
          <div>
            <button className="btn btn-primary" onClick={() => setCount(count - 1)}>quitar numero</button>
            <button className="btn btn-info" onClick={() => setCount(count + 1)}>contar</button>
          </div>
        )}
      </div>
    )
}

export default Contador
