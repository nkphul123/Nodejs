import {EventEmitter} from 'events'
let myEmitter = new EventEmitter()
myEmitter.setMaxListeners(25)

for (let i=0; i<25; i++){
    myEmitter.on('event', ()=>{
        console.log(`Listener ${i} called`)
    })
}
myEmitter.emit('event')