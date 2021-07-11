const { performance, PerformanceObserver } = require('perf_hooks');


/* ---------------------------------- setup --------------------------------- */
let iterations = 1000000000;
const a = 10;
const b = 20;

const add = (x, y) => x + y;

performance.mark('start');  // start pivot 

while (iterations--) {
    add(a, b);
}

performance.mark('end');   // end pivot

/* ------------------------------- setup ends ------------------------------- */





const obs = new PerformanceObserver((items) => {
	items.getEntries().forEach((item) => {
		console.log(item.name, +' ' + item.duration);
	});
});
obs.observe({ entryTypes: ['measure'] });



let measure = performance.measure('adding function takes : ', 'start', 'end');
// const [measure] = performance.getEnteriesByName('my special');
console.log(measure);
