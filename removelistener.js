import {EventEmitter} from 'events'
const myEmitter = new EventEmitter();

function myListener(data) {
  console.log('Event received:', data);
}
myEmitter.on('myEvent', myListener);

setInterval(() => {
  myEmitter.emit('myEvent', Date.now());
}, 300);

setTimeout(() => {
  myEmitter.removeListener('myEvent', myListener);
  console.log('Listener removed. No more events will be logged.');
}, 1000);

