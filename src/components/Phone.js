import React from 'react';

const Phone = ({manufacturer, model, resolution, diagonal, density, frequency, ram, rom, name, frequencyCPU, cores, camera, battery, wight, price}) => {
    return (
        <div className='phone'>
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
            </ul>
            <div>{price}</div>
        </div>
    );
};

export default Phone;

// manufacturer: String,
//     model: String,
//     price: String,
//     specification: {
//         display: {
//             resolution: String,
//             diagonal: String,
//             density: String,
//             frequency: String,
//         },
//         memory: {
//             ram: String,
//             rom: String,
//         },
//         processor: {
//             name: String,
//             frequency: String,
//             cores: String
//         },
//         camera: String,
//         battery: String,
//         wight: String
//     }