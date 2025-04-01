import React from 'react';

//Functional Component

function AddToCartButton(){
    const handleClick = ()=>{
        alert('Item added to Cart ')
    };

   return(   //Html-dispay on wenpage
       <button onClick={handleClick} style={styles.button}>  
        Add To Cart
       </button>
   );

}

const styles = {
    button:{
        padding:'10px',
        backgroundColor:'red',
        color:'white',
        border:'none',
        borderRadius:'5px',
        cursor:'pointer'
    },
};

export default AddToCartButton;
