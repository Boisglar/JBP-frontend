import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompare, getCompare } from '../../../features/compare.slice';
import style from './ComparePhone.module.scss'

const ComparePhone = () => {
    const products = useSelector((state) => state.compare.products)
    const phones = useSelector((state) => state.phones.phones)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompare())
    }, [dispatch])

    let array = []

    for (let index = 0; index < phones.length; index++) {
        for (let i = 0; i < products.length; i++) {
            if (phones[index]._id === products[i].product) {
                array.push(phones[index])
            }
        }

    }
    
    const handleDel = (id) => {
        dispatch(deleteCompare(id))
    }

    return (
        <div className={style.compare_div}>
            <table>
                <td>
                    <tr>Производитель</tr>
                    <tr>Модель</tr>
                    <tr>Дисплей</tr>
                    <tr>Разрешение</tr>
                    <tr>Диагональ</tr>
                    <tr>Плотность</tr>
                    <tr>Частота</tr>
                    <tr>Память</tr>
                    <tr>Оперативная</tr>
                    <tr>Постоянная</tr>
                    <tr>Процессор</tr>
                    <tr>Наименование</tr>
                    <tr>Частота</tr>
                    <tr>Количество</tr>
                    <tr>----------------</tr>
                    <tr>Камера</tr>
                    <tr>Аккумулятор</tr>
                    <tr>Вес</tr>
                </td>
                {array.map((item) => {
                        return (
                            <td>
                                <tr><img src={`http://localhost:4000${item.image[0]}`} alt={item.model} /></tr>
                                <tr>{item.manufacturer}</tr>
                                <tr>{item.model}</tr>
                                <tr>---DISPLAY---</tr>
                                <tr>{item.specification.display.resolution}</tr>
                                <tr>{item.specification.display.diagonal}</tr>
                                <tr>{item.specification.display.density}</tr>
                                <tr>{item.specification.display.frequency}</tr>
                                <tr>---MEMORY---</tr>
                                <tr>{item.specification.memory.ram}</tr>
                                <tr>{item.specification.memory.rom}</tr>
                                <tr>---PROCESSOR---</tr>
                                <tr>{item.specification.processor.name}</tr>
                                <tr>{item.specification.processor.frequencyCPU}</tr>
                                <tr>{item.specification.processor.cores}</tr>
                                <tr>----------------</tr>
                                <tr>{item.specification.camera}</tr>
                                <tr>{item.specification.battery}</tr>
                                <tr>{item.specification.wight}</tr>
                                <tr><button onClick={() => handleDel(item._id)}>УБРАТЬ</button></tr>
                            </td>
                        )
                    }
                )
                }
            </table>
        </div>
    );
};

export default ComparePhone;
