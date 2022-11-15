const text = 'I am gonna become a good Web Developer';
let index = 0;

function autoWriteText() {
    document.body.innerHTML = text.slice(0,index);

    index++;

    if(index > text.length - 1){
        index = 0;
    }
}

setInterval(autoWriteText, 100);