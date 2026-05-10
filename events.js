// import {EventEmitter} from 'events';
// const booking  = new EventEmitter();
// booking.on('booked',(user)=>{
//     console.log(`Email sent ${user}`)
// });
// booking.on('booked',(user)=>{
//     console.log(`Ticket generated for ${user}`)
// });
// booking.on('booked',(user, seatType)=>{
//     console.log(`Booking recorded in the system for ${user}, seatType- ${seatType}`)
// });
// booking.emit('booked', 'Manish', 'VIP');
// booking.emit('booked', 'Ameesha', 'Regular');
// booking.emit('booked', 'Raj', 'Premium');

import { EventEmitter } from 'events';
function bookTicket(user, seatType) {
    const booking = new EventEmitter();
    booking.on('booked', (user) => {
        console.log(`Email sent ${user}`);
    });
    booking.on('booked', (user) => {
        console.log(`Ticket generated for ${user}`);
    });
    booking.on('booked', (user, seatType) => {
        console.log(`Booking recorded in the system for ${user}, seatType- ${seatType}`);
    });
    booking.emit('booked', user, seatType);
}
bookTicket('Manish', 'VIP');
bookTicket('Ameesha', 'Regular');
bookTicket('Raj', 'Premium');
