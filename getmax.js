import {EventEmitter} from 'events'
let myEmitter = new EventEmitter()
console.log(myEmitter.getMaxListeners())
myEmitter.setMaxListeners(20)
console.log(myEmitter.getMaxListeners())