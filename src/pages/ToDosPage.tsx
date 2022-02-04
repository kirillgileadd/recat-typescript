import React, {FC, useEffect, useState} from 'react';
import List from "../component/List";
import {ItoDo} from "../types/types";
import ToDoItem from "../component/ToDoItem";
import axios from "axios";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const ToDosPage: FC = () => {
    const {todos, page, limit, loading, error} = useTypeSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (error) {
        return <h3>Error...</h3>
    }

    return (
        <>
            <List items={todos}
                  renderItem={(toDo: ItoDo) => <ToDoItem toDo={toDo} key={toDo.id}/>}
            />
            <div style={{display: 'flex'}}>
                {
                    pages.map((p: number) => <div
                        onClick={() => setTodoPage(p)}
                        style={{
                            border: page === p ? '2px solid lightpink' : 'none',
                            padding: '10px',
                            margin: '0px 5px',
                            textAlign: "center",
                            cursor: "pointer"
                        }}>{p}</div>)
                }
            </div>

        </>
    );
};

export default ToDosPage;