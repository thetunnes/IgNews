import { useEffect, useState } from 'react';

export function Async() {

    const [isButtonVisible, setIsButtonVisible] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsButtonVisible(true)
        }, 1000)
    }, [])
    return (
        <div>
            <div>Hello world</div>
            { isButtonVisible && <button>button</button>}
        </div>
    )
}