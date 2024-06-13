import React from 'react'
import MenuItem from "./MenuItem";

const MenuBody = ({ items }) => {
    return (
        <div className="section-center">
            {items.map(item => {
                if (item.name.toLowerCase() === "chả rươi"){
                    item.isOutOfStock = true
                } else {
                    item.isOutOfStock = false
                }
                return <MenuItem key={item.id} item={item}/>
            })}
        </div>
    )
}

export default MenuBody
