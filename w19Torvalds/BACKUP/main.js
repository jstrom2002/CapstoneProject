import React from "react";

const {app, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  //mainWindow.loadFile('./public/index.html')
 // mainWindow.loadURL('file://'+__dirname+'/index.html');
  //mainWindow.loadURL('http://localhost:3000/')
  mainWindow.loadURL(`file://${path.join(__dirname, '../public/index.html')}`)

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  //mainWindow.onload = function(){
   // ReactDOM.render(<App />, document.getElementById('root'));
 // }
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})