import CakeView from './features/cake/CakeView'
import DonughtView from './features/donught/DonughtView'
import IcecreamView from './features/icecream/IcecreamView'
import UserView from './features/user/UserView'

import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Shop Interface</h1>
      <CakeView />
      <IcecreamView />
      <DonughtView />
      <UserView />
    </div>
  )
}

export default App
