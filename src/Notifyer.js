const Notifyer = {
    //função assincrona
    async init() {
        //Usando notification(promisse) para fazer pedido de permissão
        const permisson = await Notification.requestPermission()
        if (permisson !== "granted") {
            throw new Error('Permission denied!')
        }
    },
    notify({ title, body, icon }) {
        return () => new Notification(title, {
            body,
            icon,
        })
    }
}

const Notes = {
    title: ["Get out!", "Get up!", "Come on girl!", "Dale sem miedo", "Eita caramba!", "Bambino", "Gratizie!"],
    body: ["Let's Do it!", "Great!", "Awasome!", "Bla", "Crick", "Djow", "aaaaaaaaaaaaa"]
};

export { Notifyer, Notes }