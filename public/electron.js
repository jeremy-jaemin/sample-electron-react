const { app, BrowserWindow, ipcMain } = require("electron");

const {
  SEND_HELLO_PING, 
} = require("../src/constant");

app.whenReady().then(() => {
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      preload: __dirname + "/preload.js",
    },
  });
  win.loadURL("http://localhost:3000");
});
app.on("window-all-closed", () => {
  app.quit();
});
ipcMain.on(SEND_HELLO_PING, (event, arg) => {
  console.log("HELLO!!");
});
