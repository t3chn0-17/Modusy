import { useState } from 'react'
import TitleBar from './components/title-bar/titleBar'
import SongCon from './components/song-container/songCon'
import SideBar from './components/side-bar/sideBar'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import './App.css'

// Assets
import appIcon from './assets/appIcon.png'
import minIcon from './assets/minimize.png'
import maxIcon from './assets/square.png'
import closeIcon from './assets/close.png'

import homeIcon from './assets/home.png'
import playlistIcon from './assets/playlist.png'
import accountIcon from './assets/user.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TitleBar
        appIcon={appIcon} 
        icon1={minIcon} 
        icon2={maxIcon} 
        icon3={closeIcon} />

      <div className='appBody'>
        <SideBar
          homeIcon={homeIcon}
          playlistIcon={playlistIcon}
          accountIcon={accountIcon} />
      </div>
    </>
  )
}

export default App
