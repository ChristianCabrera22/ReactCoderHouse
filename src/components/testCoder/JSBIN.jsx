import React from 'react'

const JSBIN = () => {
    let products = [
        {
          id: '1',
          name: "Remera",
          description: "es negra",
          stock: 7
        },
        {
            id: '2',
            name: "Chomba",
            description: "es gris",
            stock: 4
        }
      ]
const getProducts=new Promise((resolve, reject) => {
    setTimeout(()=> {
        if(products.length) {
            resolve(products)
        } else {
            reject("No hay productos pa mostrar")
        }
    }, 3000)
})

getProducts
    .then((res)=>{
        console.log(res)
    })
    .cath((err)=>{
        console.log(err)
    })

  return (
    <div></div>
    
  )
}

export default JSBIN