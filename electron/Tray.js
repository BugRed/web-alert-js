const { Tray } = require('electron')
const { resolve }= require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'chess-knight-alt.png')

function creatTray() {

    const tray = new Tray(iconPath)
    tray.setToolTip('Game Reminder')

    return tray
}

module.exports = creatTray()