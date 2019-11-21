const { app, BrowserWindow , Menu  } = require('electron')
const notifier  = require("node-notifier");
let win






function createWindow () {

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })


win.openDevTools();
  win.loadURL('https://music.youtube.com')
  win.on('closed', () => {

    win = null
  })
}

app.on('ready', ()=>{
// You can use console.log(notification); to see more available properties

var onError = function(err,response){
    console.error(err,response);
};
            
notifier.notify({
    message: "This Application is Made By Lanson Studios Team",
    title: "Welcome To Youtube Desktop Application",
    appID: 'Lanson Studios',
    icon : __dirname +"/datas/logo.png",
},onError);
  createWindow();




})


app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // MacOS'de dock'a tıklandıktan sonra eğer başka pencere yoksa
  // yeni pencere açılması normaldir.
  if (win === null) {
    createWindow()
  }
})