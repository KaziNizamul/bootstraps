let counter = 0;

function getData(){
    console.log('fetching data ...', counter++);
}

function debounce(func, delay) {

    let timer;
    return function () {

        let context = this, args = arguments;

        clearTimeout(timer);
        
        timer = setTimeout(() => {
            func.apply(context, args)
        }, delay)
    }

}

const betterFunction = debounce(getData, 800);
