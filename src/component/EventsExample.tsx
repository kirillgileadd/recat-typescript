import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [onDrag, setOnDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
        setInputValue('')
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setOnDrag(false)
        console.log('dropped')
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setOnDrag(false)
    }

    const dragWidthPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setOnDrag(true)
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder={"uncontrolled"}/>
            <input value={inputValue} onChange={changeHandler} type="text" placeholder={"controlled"}/>
            <button onClick={clickHandler}>Input Value</button>
            <div
                draggable
                style={{width: 200, height: 200, backgroundColor: "lightpink"}}
                onDrag={dragHandler}
            />
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWidthPreventHandler}
                style={{width: 200, height: 200, backgroundColor: onDrag ? 'lightblue' : 'lightpink', marginTop: 15}}
            />
        </div>
    );
};

export default EventsExample;