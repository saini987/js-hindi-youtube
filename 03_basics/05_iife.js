// name IIFE

(function chai(){
    console.log(`DB connected`)
})();

// simple IIFE

((name) =>{
    console.log(`DB COnnected2 ${name}`);
})("ROhit")