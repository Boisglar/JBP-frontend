import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompare } from '../../../features/compare.slice';

const ComparePhone = () => {
    const products = useSelector((state) => state.compare.products)
    const phones = useSelector((state) => state.phones.phones)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCompare())
    }, [dispatch])
    return (
        <div className=''>
            <table>
                <td>
                    <tr>IMAGE</tr>
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
                {products.map((element) => {
                    return phones.map((item) => {
                        if (element === item._id) {
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
                                </td>
                            )
                        }
                    })
                }
                )}
            </table>
        </div>
    );
};

export default ComparePhone;
