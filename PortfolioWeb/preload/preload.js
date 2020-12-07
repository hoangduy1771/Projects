// loader percent count
const percentNum = document.querySelector(".progress")
const preloadText = document.querySelector(".preload-text")
let counter = 0;
setInterval(() => {
    if(counter == 100){
        clearInterval();
    }else {
        counter += 1;
        percentNum.textContent = counter + "%";
    }
}, 25)

// replace reload text
setTimeout(() =>{
    // preloadText.textContent = "Drinking coffee"
    // setTimeout(() => {
        preloadText.textContent = "Coffee's Ready!"
    // }, 2000)
}, 2500)

