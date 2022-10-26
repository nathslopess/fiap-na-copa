import React, { useEffect } from 'react'

const validar = sessionStorage.getItem("usuario-verificado")

function Home() {


    useEffect(()=>{
        if(validar == null){
            window.location = "/"
        }
    },[])


        return(
        <>
             {validar &&(
            <>
                <h1>Home</h1>
                <p>Olá {validar}, seja bem-vindo!</p>
            </>
            )}
        </>
    )
}

export default Home;
    