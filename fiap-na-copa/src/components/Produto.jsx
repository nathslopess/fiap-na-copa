import React, { useEffect } from 'react'

const validar = sessionStorage.getItem("usuario-verificado")

function Produto() {

    useEffect(()=>{ 
        if(validar == null){
            window.location = "/"
        }
    },[])

    return(
        <>
            {validar &&(
                <>
                    <h1>Produto</h1>
                </>
            )}


        </>
    );
}

export default Produto;