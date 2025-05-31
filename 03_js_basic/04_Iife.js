// Imediately Invoked Function  Expression (IIFE)
// USE OF IIFE: TO REMOVE THE PROBLEM/POLLUTION THROUGH GLOBAL SCOPE 
// ( IN THIS FUNCTION )()
(function chai() {
    
    console.log(`DB CONNECTED`);
}) ();

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
} ) ('smit')