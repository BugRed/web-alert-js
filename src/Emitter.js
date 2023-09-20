//publisher subscriber
const Emitter = {

    events: {},

    //ouvindo as funções (subscribes)
    on(event, cb) {
        //guardando os eventos num array de forma logica
        Emitter.events[event] = Emitter.events[event] || []
        Emitter.events[event].push(cb);
    },
    //emitindo as funções (publisher) e rest operator
    emit(event, ...rest) {
        if (event in Emitter.events === false) {
            return;
        }
        //utilizando prototype do array
        Emitter.events[event].forEach((e) => {
            //definindo um canal rest
            e(...rest)
        });
    },

}



export { Emitter }