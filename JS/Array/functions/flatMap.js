/* -------------------------------------------------------------------------- */
/*                              without flatMap :                             */
/* -------------------------------------------------------------------------- */
// we use to do :  map it, than flat it 

console.log(

    [1, 2, 3].map(function double(elem) {
        return [elem * 2];
    }).flat()

)

// output : 
// [[2], [4], [6]](withoutflat) -> [2, 4, 6](withflat)

 /* ------------------------------ *  WORKING : ------------------------------ */
 /* ----------------- *  map created an intermediatory Array, ---------------- */
 /* ---------------------- *  which then use to get flat --------------------- */
 








/* -------------------------------------------------------------------------- */
/*                                with flatMap                                */
/* -------------------------------------------------------------------------- */





console.log(
	[1, 2, 3].flatMap(function double(elem) {
			return [elem * 3];
	})
);

// output : [3, 6, 9];
 /* ----------------------------- *   WORKING  : ----------------------------- */
 /* ------------- *   engine use to flat array, while being mapping ------------- */
 /* ----------- *   so it doesnt creates that intermediatory array ----------- */
