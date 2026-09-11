const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

let win;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    width,
    height,
    resizable: true,
    fullscreen: false, // maximized, not true fullscreen
    frame: true,       // show title bar
    autoHideMenuBar: true,
    icon: path.join(__dirname, "build", "icon.ico"),
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: false,
    },
  });

  win.maximize(); // maximize the window
  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
