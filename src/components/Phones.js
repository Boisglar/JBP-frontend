import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhone } from '../features/phone.slice';
import Phone from './Phone';

const Phones = () => {
    const phones = useSelector((state) => state.phones)
    const loading = useSelector((state) => state.loading)
    const error = useSelector((state) => state.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPhone())
    }, [dispatch])

    if (loading) {
        return <h3>...LOADING</h3>
    }

    if (error) {
        return <h3>ERROR: {error}</h3>
    }

    return (
        <div className='phones'>
            {phones.map((item) => {
                return(
                    <Phone 
                    manufacturer={item.manufacturer}
                    model={item.model}
                    resolution={item.specification.display.resolution}
                    diagonal={item.specification.display.diagonal}
                    density={item.specification.display.density}
                    frequency={item.specification.display.frequency}
                    ram={item.specification.memory.ram}
                    rom={item.specification.memory.rom}
                    name={item.specification.processor.name}
                    frequencyCPU={item.specification.processor.frequencyCPU}
                    cores={item.specification.processor.cores}
                    camera={item.specification.camera}
                    battery={item.specification.battery}
                    wight={item.specification.wight}
                    price={item.price}
                    />
                )
            })}
        </div>
    );
};

export default Phones;