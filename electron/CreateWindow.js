const { BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 250,
        height: 310,
        //não mostrar janela
        show:false,
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

    

    return win;
}

module.exports = createWindow()