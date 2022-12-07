import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, patchCart } from '../../features/cart.slice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.productId)
    const quantity = products.filter((element) => element.productId === item._id)

    const handleMinus = (id, type, count) => {
        if (count >= 1) {
            dispatch(patchCart({id, type, count}))
            console.log(id, type, count);
        }
    }

    const handlePlus = (id, type, count) => {
        if (count <= item.specification.amount) {
            dispatch(patchCart({id, type, count}))
            console.log(id, type, count);
        }
    }

    const handleDel = (id) => {
        dispatch(deleteFromCart(id))
    }

    return (
        <div>
            <div className="image">
                <img src={`http://localhost:4000${item.image[0]}`} alt={item.name} />
            </div>
            <div className="discription">
                <div className="product">
                    <div className="company">{item.manufacturer}</div>
                    <div className="model">{item.model}</div>
                </div>
                <div className="memory">
                    <div className="rom">Память: {item.rom}</div>
                    <div className="ram">ОЗУ: {item.ram}</div>
                </div>
            </div>
            <div className="buttons">
                <div className="delete">
                    <button onClick={() => handleDel(item._id)}>Удалить</button>
                </div>
                <div className="quantity">
                    <button onClick={() => handleMinus(quantity[0]._id, 'minus', quantity[0].count - 1)}>-</button>
                    <div className="counter">{quantity[0].count}</div>
                    <button onClick={() => handlePlus(quantity[0]._id, 'plus', quantity[0].count + 1)}>+</button>
                </div>
                <div className="amount">Остаток на складе: {item.specification.amount}</div>
            </div>
        </div>
    );
};

export default CartItem;