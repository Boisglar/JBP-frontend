import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompare, getCompare } from '../../../features/compare.slice';
import CompareButton from './CompareButton';
import style from './ComparePhone.module.scss'

const ComparePhone = () => {
    const products = useSelector((state) => state.compare.products)
    const phones = useSelector((state) => state.phones.phones)
    const active = useSelector((state) => state.compare.active)
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
                <div className={style.table_h}>
                    <div>Производитель</div>
                    <div>Модель</div>
                    <div className={style.display}>Дисплей</div>
                    <div>Разрешение</div>
                    <div>Диагональ</div>
                    <div>Плотность</div>
                    <div>Частота</div>
                    <div className={style.memory}>Память</div>
                    <div>Оперативная</div>
                    <div>Постоянная</div>
                    <div className={style.processor}>Процессор</div>
                    <div>Наименование</div>
                    <div>Частота</div>
                    <div>Количество</div>
                    <div className={style.other}>Прочее</div>
                    <div>Камера</div>
                    <div>Аккумулятор</div>
                    <div>Вес</div>
                </div>
                {array.map((item) => {
                        return (
                            <div className={style.table_i}>
                                <span className={style.photo}><img className={style.image} src={`http://localhost:4000${item.image[0]}`} alt={item.model} /></span>
                                <div>{item.manufacturer}</div>
                                <div>{item.model}</div>
                                <div className={style.display}></div>
                                <div>{item.specification.display.resolution}</div>
                                <div>{item.specification.display.diagonal}</div>
                                <div>{item.specification.display.density}</div>
                                <div>{item.specification.display.frequency}</div>
                                <div className={style.memory}></div>
                                <div>{item.specification.memory.ram}</div>
                                <div>{item.specification.memory.rom}</div>
                                <div className={style.processor}></div>
                                <div>{item.specification.processor.name}</div>
                                <div>{item.specification.processor.frequencyCPU}</div>
                                <div>{item.specification.processor.cores}</div>
                                <div className={style.other}></div>
                                <div>{item.specification.camera}</div>
                                <div>{item.specification.battery}</div>
                                <div>{item.specification.wight}</div>
                                <button className={style.del_button} onClick={() => handleDel(item._id)}>УБРАТЬ</button>
                            </div>
                        )
                    }
                )
                }
                {active && <CompareButton/>}
        </div>
    );
};

export default ComparePhone;
