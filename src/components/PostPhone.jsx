import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhone } from '../features/phone.slice';

const PostPhone = () => {
    const [manufacturer ,setmanufacturer] = useState('')
    const [model ,setmodel] = useState('')
    const [resolution ,setresolution] = useState('')
    const [diagonal ,setdiagonal] = useState('')
    const [density ,setdensity] = useState('')
    const [frequency ,setfrequency] = useState('')
    const [ram ,setram] = useState('')
    const [rom ,setrom] = useState('')
    const [name ,setname] = useState('')
    const [frequencyCPU ,setfrequencyCPU] = useState('')
    const [cores ,setcores] = useState('')
    const [camera ,setcamera] = useState('')
    const [battery ,setbattery] = useState('')
    const [wight ,setwight] = useState('')
    const [price ,setprice] = useState('')

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.loading)
    const error = useSelector((state) => state.error)

    const handlePostPhone = () => {
        dispatch(addPhone(manufacturer, model, resolution, diagonal, density, frequency, ram, rom, name, frequencyCPU, cores, camera, battery, wight, price))
    }

    if (loading) {
        return <h3>...LOADING</h3>
    }

    if (error) {
        return <h3>ERROR: {error}</h3>
    }

    return (
        <div className='post-phone'>
            <ul>
                <li>Цена: <input type="text" value={price} onChange={(e)=> setprice(e.target.value)}/></li>
                <li>Производитель: <input type="text" value={manufacturer} onChange={(e)=> setmanufacturer(e.target.value)}/></li>
                <li>Модель: <input type="text" value={model} onChange={(e)=> setmodel(e.target.value)}/></li>
                <li>Экран
                    <ul>
                        <li>Разрешение: <input type="text" value={resolution} onChange={(e)=> setresolution(e.target.value)}/></li>
                        <li>Диагональ: <input type="text" value={diagonal} onChange={(e)=> setdiagonal(e.target.value)}/></li>
                        <li>Плотность пикселей: <input type="text" value={density} onChange={(e)=> setdensity(e.target.value)}/></li>
                        <li>Частота обновления: <input type="text" value={frequency} onChange={(e)=> setfrequency(e.target.value)}/></li>
                    </ul>
                </li>
                <li>Память
                    <ul>
                        <li>RAM: <input type="text" value={ram} onChange={(e)=> setram(e.target.value)}/></li>
                        <li>ROM: <input type="text" value={rom} onChange={(e)=> setrom(e.target.value)}/></li>
                    </ul>
                </li>
                <li>Процессор
                    <ul>
                        <li>Наименование: <input type="text" value={name} onChange={(e)=> setname(e.target.value)}/></li>
                        <li>Частота: <input type="text" value={frequencyCPU} onChange={(e)=> setfrequencyCPU(e.target.value)}/></li>
                        <li>Количество ядер: <input type="text" value={cores} onChange={(e)=> setcores(e.target.value)}/></li>
                    </ul>
                </li>
                <li>Камера: <input type="text" value={camera} onChange={(e)=> setcamera(e.target.value)}/></li>
                <li>Аккумулятор: <input type="text" value={battery} onChange={(e)=> setbattery(e.target.value)}/></li>
                <li>Вес: <input type="text" value={wight} onChange={(e)=> setwight(e.target.value)}/></li>
            </ul>   
            <button onClick={() => handlePostPhone()}>ADD PHONE</button>        
        </div>
    );
};

export default PostPhone;