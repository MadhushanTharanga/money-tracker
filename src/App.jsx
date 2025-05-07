import './App.css'

function App() {
  return (
    <div className="main-outer">
      <div className="inner-wrapper">
      <h1>$400<span>.00</span></h1>
      <form action="">
        <div className="basic">
          <input type="text" placeholder='+200 new sansung TV'/>
          <input type="datetime-local" />
        </div>
        <div className="discription">
          <input type="text" placeholder='Enter Discription' />
        </div>
        <button type='submit'>Add New Transaction</button>
      </form>
      <div className="transactions">

      </div>
      </div>
    </div>
  )
}

export default App
