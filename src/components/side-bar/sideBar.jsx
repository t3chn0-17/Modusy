import './sideBar.css'

export default function SideBar({homeIcon, playlistIcon, accountIcon}) {
  return (
    <>
      <div className="sideBar">
        <button><img src={homeIcon} alt="Home" className='no-select' /></button>
        <button><img src={playlistIcon} alt="Playlists" className='no-select' /></button>
        {/* <button>Artists</button> */}
        <button><img src={accountIcon} alt="Account" className='no-select' /></button>
      </div>
    </>
  )
}