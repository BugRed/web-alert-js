import { Notifyer } from "./Notifyer.js";

const App = {
    async start(){
        try{
            await Notifyer.init()
            Notifyer.notify({
                title:"Post hour",
                body: "NEXT POST"
            })
        } catch (err) {
            console.log(err.message)
        }
       
    }
}

export { App };