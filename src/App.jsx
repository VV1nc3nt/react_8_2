import './App.css'
import GetData from './components/GetData'
import GetError from './components/GetError'
import GetPending from './components/GetPending'

function App() {

  return (
    <div className='box-wrapper'>
      <GetData />
      <GetPending />
      <GetError />
    </div>
  )
}

export default App
