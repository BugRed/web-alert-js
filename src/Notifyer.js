const Notifyer = {
    //função assincrona
    async init() {
        //Usando notification(promisse) para fazer pedido de permissão
     const permisson = await Notification.requestPermission()
     if(permisson !== "granted"){
        throw new Error('Permission denied!')
     }
    },
    notify({ title, body, icon}) {
        new Notification(title, {
            body,
            icon,
        })
    }
} 

export { Notifyer }