import {ItoDo} from "./types";

export interface TodoState {
    todos: ItoDo[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
    FETCH_TODO_PAGE = 'FETCH_TODO_PAGE'
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODO;
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS;
    payload: ItoDo[];
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR;
    payload: string
}

interface FetchTodoPageAction {
    type: TodoActionTypes.FETCH_TODO_PAGE;
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | FetchTodoPageAction