import React,{useEffect,useState} from 'react'
import './ItemCount.css'


export const ItemCount = ({i,stock,onAdd}) => {
    const [count, setCount] = useState(parseInt(i))
    //alert(count);
    const descontar=()=>{
        setCount(count-1)
    }

    const incrementar=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        setCount(parseInt(i))
    }, [i])

  return (
    <div className="text-center">
        <button disabled={count<=1} onClick={descontar} className="btn btn-primary px-3 mt-0">-</button>
        <span className="px-2 mt-1 ">{count}</span>
        <button disabled={count>=stock} onClick={incrementar} className='btn btn-primary px-3 mt-0'>+</button>
        {stock !== 0 && (<div><p disabled={stock<=0} onClick={()=>onAdd(count)} className="btn btn-success px-2 mt-1">Agregar al carrito</p></div>)}
        </div>
  )
}

export default ItemCount