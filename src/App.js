import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";

const App = {
    async start(){
        try{

            Timer.init()
            // await Notifyer.init()
            // Notifyer.notify({
            //     title:"Post hour",
            //     body: "NEXT POST"
            // })
        } catch (err) {
            console.log(err.message)
        }
       
    }
}

export { App };