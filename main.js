const { app, BrowserWindow } = require('electron');
const express = require('./backend/app');

function createWindow() {
    const app = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    app.loadFile('index.html');
    express();
}

app.whenReady().then(createWindow)