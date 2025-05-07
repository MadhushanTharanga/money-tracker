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
        <div className="line1">
          <div className="desc1">new bike</div>
          <div className="money1" >-300</div>
        </div>
        <div className="line2">
          <div className="desc2">test</div>
          <div className="date-time">2025-05-07  09:27</div>
        </div>
        <hr />
      </div>
      <div className="transactions">
        <div className="line1">
          <div className="desc1">website gig</div>
          <div className="money2">800</div>
        </div>
        <div className="line2">
          <div className="desc2">website for my uncle</div>
          <div className="date-time">2023-02-17  10:47</div>
        </div>
        <hr />
      </div>
      </div>
    </div>
  )
}

export default App
