import './App.css';
import heroesID from './heroes.json'
import {useState} from 'react'

function App() {
  const [input, setInput] = useState("")
  const [tempid, setIDs] = useState("")
  const [results, setResults] = useState([])
  const [heroes, setHeroes] = useState("")

  const fetchData = (value) => {
    const results = heroesID.heroes.filter(hero => {
      return value && hero.name.toLowerCase().includes(value)
    })
    setResults(results)
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className="App">
        <div className="result-container">
          <input type="text" value={input} onChange={(e) => handleChange(e.target.value)}/>
          {
            results.map(({name, id}, index) => {
              return <button onClick={result => {
                if (tempid.length === 0) {
                  setIDs(id)
                  setHeroes(name.charAt(0).toUpperCase() + name.slice(1))
                }
                else {
                  setIDs(tempid + ", " + id)
                  setHeroes(heroes + ", " + name.charAt(0).toUpperCase() + name.slice(1))
                }
                setInput("")
                handleChange("")
              }}>
                {name}
              </button>
            })
          }
        </div>
        <p>{tempid}</p>
        <button onClick={() => {navigator.clipboard.writeText('[' + tempid + ']')}}>COPY</button>
        <p className="heroes-container"><strong>Heroes:  </strong>{heroes}</p>
       
    </div>
  );
}

export default App;
