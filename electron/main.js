import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'

app.disableHardwareAcceleration();
app.commandLine.appendSwitch('disable-direct-composition');
app.commandLine.appendSwitch('disable-gpu-compositing');

ipcMain.on('window-control', (event, action) => {
  if (!mainWindow) return;

  switch (action) {
    case 'minimize':
      mainWindow.minimize();
      break;
      
    case 'maximize':
      if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
      } else {
        mainWindow.maximize();
      }
      break;
      
    case 'close':
      mainWindow.close();
      break;
  }
});

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 920,
    height: 590,
    transparent: true,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Allows easy development interaction
    },
  })

  // If we are developing locally, load the local Vite server port
  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    // If built for production, load the static HTML file
    mainWindow.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
