const { app, BrowserWindow, Menu } = require('electron');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

function create() {
  const w = new BrowserWindow({
    width: 560, height: 900, minWidth: 420, minHeight: 640,
    backgroundColor: '#17181a', title: 'MPS-16', autoHideMenuBar: true,
    webPreferences: { backgroundThrottling: false }
  });
  Menu.setApplicationMenu(null);
  w.loadFile('www/index.html');
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
