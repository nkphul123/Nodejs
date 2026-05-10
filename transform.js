import {Transform} from 'stream';

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback){
        callback(null, chunk.toString().toUpperCase());
    }
})
process.stdin.pipe(upperCaseTransform).pipe(process.stdout)