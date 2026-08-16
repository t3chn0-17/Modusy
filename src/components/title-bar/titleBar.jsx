import "./titleBar.css"

export default function TitleBar({appIcon, icon1, icon2, icon3}) {

  const handleMinimize = () => window.ipcRenderer.send('window-control', 'minimize');
  const handleMaximize = () => window.ipcRenderer.send('window-control', 'maximize');
  const handleClose = () => window.ipcRenderer.send('window-control', 'close');

  return (
    <>
      <div className="titleBar" onDoubleClick={handleMaximize}>
        <img src={ appIcon } alt="appIcon" className="appIcon no-select" draggable="false" />
        <h1 className="title">TTK Music Player</h1>
        <div className="btnCon">
          <button className="tbBtn" onClick={handleMinimize}>
            <img src={ icon1 } alt="minimize" width={22} height={22} draggable="false" />
          </button>
          <span />
          <button className="tbBtn" onClick={handleMaximize}>
            <img src={ icon2 } alt="maximize" width={22} height={22} draggable="false" />
          </button>
          <span />
          <button className="tbBtn xBtn" onClick={handleClose}>
            <img src={ icon3 } alt="close" width={22} height={22} draggable="false" />
          </button>
        </div>
      </div>
    </>
  );
}