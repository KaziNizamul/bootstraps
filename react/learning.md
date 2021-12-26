1. 
statement : 
            ek array mein 'titles' hai.
            Ab tak mai harr title ke liye 
            <MenuItem title="#">
            <MenuItem title="##"> 
            <MenuItem title="###"> likh raha tha.
            ab chahiye ki, arr se iterate hoke, 
            title chale jaaye menuItem mein.
            ekhi baar <MenuItem title="{code}"> likhna pade

approach:   
            0. braces mein likhne ka, coz yeh braces JS code bann jaate h
            1. array ko iterate krne ke liye, just usme "map" krna hai
            
               this.state.arr.map( (elem) => {
                   <MenuItem title={elem.title} />
               })
