import React from 'react';

const Phone = ({amount, discription, image, manufacturer, model,
    resolution, diagonal, density, frequency, ram, rom, name,
    frequencyCPU, cores, camera, battery, wight, price}) => {
    return (
        <div className='phone'>
            {image.map((item) => <img src={`http://localhost:4000${item}`} alt={name}/>)}
            <ul>
                <li>Производитель: <p>{manufacturer}</p></li>
                <li>Модель: <p>{model}</p></li>
                <li>Экран 
                    <ul>
                        <li>Разрешение: {resolution}</li>
                        <li>Диагональ: {diagonal}</li>
                        <li>Плотность пикселей: {density}</li>
                        <li>Частота обновления: {frequency}</li>
                    </ul>
                </li>
                <li>Память
                    <ul>
                        <li>RAM: {ram}</li>
                        <li>ROM: {rom}</li>
                    </ul>
                </li>
                <li>Процессор
                    <ul>
                        <li>Наименование: {name}</li>
                        <li>Частота: {frequencyCPU}</li>
                        <li>Количество ядер: {cores}</li>
                    </ul>
                </li>
                <li>Камера: {camera}</li>
                <li>Аккумулятор: {battery}</li>
                <li>Вес: {wight}</li>
                <li>Остаток на складе: {amount}</li>
            </ul>
            <div>{price}</div>
            <div>{discription}</div>
        </div>
    );
};

export default Phone;

