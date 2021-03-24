import React from 'react';

/*
let arr = ['Rijeka', 'Zagreb', 'Pula', 'Split' ];
arr.push('Dubrovnik');
console.log(arr);



let x = () => {
    let anja = 5+2;
    let lily = 10+3;
    if (anja >= 7 && lily === 13) {
    alert('Cool');
}

    else {
        alert('Sipak');
    }
  
};

x();
console.log(x);
*/



const Playground = () => {

function clickHandler(event) {
    console.log('Button Clicked');
 };

    return(
<>

<div className='container1'>Blue Container <br/><br/>

    <button className='changebtn' onClick={clickHandler}>Click Me</button>

</div>
<div className='container2'>Pink Container</div>
</>

);
};

export default Playground