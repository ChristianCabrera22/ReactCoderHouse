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
    <div className='counter'>
        <button disabled={count<=1} onClick={descontar} class="btn btn-primary px-2 mt-1">-</button>
        <span class="px-2 mt-1">{count}</span>
        <button disabled={count>=stock} onClick={incrementar} class="btn btn-primary px-2 mt-1">+</button>
        <div><button disabled={stock<=0} onClick={()=>onAdd(count)}class="btn btn-success px-2 mt-1">Agregar al carrito</button></div>
    </div>
  )
}

export default ItemCount