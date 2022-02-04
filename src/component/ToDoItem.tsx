import React, {FC} from 'react';
import {ItoDo} from "../types/types";

interface toDoItemProps {
    toDo: ItoDo
}

const ToDoItem: FC<toDoItemProps> = ({toDo}) => {
    return (
        <div>
            <div>
                {toDo.id}
            </div>
                {toDo.title}
            <input type="checkbox" checked={toDo.completed}/>
        </div>
    );
};

export default ToDoItem;