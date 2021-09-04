let i = 0;
let start = Date.now()
function test() {
    i++;
    if(i<100) {
        setTimeout(() => {
           test() 
        }, 0);
    }else {
        console.timeEnd();
    }
    
}
test()
