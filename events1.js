import { EventEmitter } from 'events';
const products = [
    { id: 1, name: 'Laptop', price: 60000, stock: 5 },
    { id: 2, name: 'Headphones', price: 3000, stock: 10 },
    { id: 3, name: 'Smartphone', price: 25000, stock: 7 }
];
function placeOrder(user, productId, quantity) {
    const order = new EventEmitter();
    const product = products.find(p => p.id === productId);
    if (!product || product.stock < quantity) {
        console.log(`Order failed for ${user}`);
        return;
    }
    order.on('ordered', (user, product, quantity) => {
        console.log(`Invoice generated for ${user} | ${product.name} | Qty: ${quantity} | Price: ${quantity*product.price}`);
    });
    order.on('ordered', (user, product, quantity) => {
        product.stock -= quantity;
        console.log(`Stock updated for ${product.name}, remaining: ${product.stock}`);
    });
    order.on('ordered', (user, product, quantity) => {
        console.log(`Order confirmation email sent to ${user}`);
    });
    order.emit('ordered', user, product, quantity);
}

placeOrder('Manish', 1, 1);
placeOrder('Ameesha', 2, 2);
placeOrder('Raj', 3, 3);
