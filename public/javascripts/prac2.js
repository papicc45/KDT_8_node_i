
let colors = ['red', 'orange', 'yellow', 'green', 'blue'];
function changeColor(idx) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            document.body.style.background = colors[idx];
            resolve(++idx);
        }, 1000);
    });
}

changeColor(0)
.then((result)=> {
    return changeColor(result);
}, )
    .then((result)=> {
        return changeColor(result);
    })
    .then((result)=> {
        return changeColor(result);
    })
    .then((result)=> {
        return changeColor(result);
    })
    .then((result)=> {
        return changeColor(result);
    });

