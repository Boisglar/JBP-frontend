import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../features/cart.slice';
import CartItem from './CartItem';

const Cart = () => {
    const products = useSelector((state) => state.cart.productId)
    const phones = useSelector((state) => state.phones.phones)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    let array = []
    let sum = 0

    for (let index = 0; index < phones.length; index++) {
        for (let i = 0; i < products.length; i++) {
            if (phones[index]._id === products[i].productId) {
                array.push(phones[index])
            }
        }
    }

    array.forEach((item) => {
        sum = sum + Number(item.price)
    })

    return (
        <div>
            {array.map((element, index) => <CartItem item={element} key={index}/>)}
            <div className="sum_table">
                <div className="title">Сумма заказа</div>
                <div className="price">Стоимость</div>
                <div className="topay">К оплате</div>
                <div className="sum">{sum}</div>
                <button>Купить({array.length})</button>
            </div>
        </div>
    );
};

export default Cart;