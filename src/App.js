import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";
import { Notes } from "./Notifyer.js";



const randomNotify = (list) => {
    const index = Math.floor(Math.random() * Notes[list].length)
    return String(Notes[list][index]);
}


const notify = () => {

    const notification = Notifyer.notify({
        title: randomNotify('title'),
        body: randomNotify('body'),
    })
    

    notification()
}

const App = {
    async start() {
        try {
            await Notifyer.init()
            Emitter.on('countdown-start', notify)
            Emitter.on('countdown-end', Timer.init)


            Timer.init(0.1 * 60)

        } catch (err) {
            console.log(err.message)
        }

    }
}

export { App };