const { app, BrowserWindow} = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 250,
        height: 310,
        //botões de janela fechar e minimizar
        frame: false,
        //permitir alterar tamanho da janela
        resizable: false,
        //acesso a fullscreean
        fullscreenable: false,


    })
    // use para acessar outras paginas a mesma função
    // win.loadURL('https://google.com')
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})


