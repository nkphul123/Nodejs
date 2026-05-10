export function auth(req, res, next) {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        next();
    } else {
        res.send('Invalid credentials!');
    }
}

// export default function auth(req, res, next) {
//     const { username, password } = req.body;
//     if (username === 'admin' && password === 'admin') {
//         next();
//     } else {
//         res.send('Invalid credentials!');
//     }
// }