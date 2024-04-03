import './App.css';
import heroesID from './heroes.json'
import {useState} from 'react'

function App() {
  const [input, setInput] = useState("")
  const [tempid, setIDs] = useState("")
  const [results, setResults] = useState([])

  const fetchData = (value) => {
    const results = heroesID.heroes.filter(hero => {
      return value && hero.name.toLowerCase().includes(value)
    })
    setResults(results)
  }

  const handleChange = (value) => {
    setInput({name: value})
    fetchData(value)
  }

  return (
    <div className="App">
        <div className="result-container">
          <input type="text" value={input.name} onChange={(e) => handleChange(e.target.value)}/>
          {
            results.map(({name, id}, index) => {
              return <button onClick={result => setIDs(tempid + ", " + id)}>
                {name}
              </button>
            })
          }
        </div>
        <p>{tempid}</p>
      <button>Predict Duration</button>
    </div>
  );
}

export default App;
