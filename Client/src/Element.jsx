import React from 'react';

const Element = ({data}) =>{
    return <>
         <h4 key={Math.random()}> {`Value is :: ${data ? data.value:"Empty"}`} </h4>
    </>
}


export default Element;