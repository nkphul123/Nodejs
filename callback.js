function doHomework(subject, callback){
    console.log(`Starting my ${subject} homework`);
    callback();
}
// function finishedHomework(){
//     console.log("Finished homework");
// }
doHomework('Math', ()=>{
    console.log("Finished homework");
});