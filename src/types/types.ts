export interface IAdders {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAdders;
}

export interface ItoDo {
    id: number;
    title: string;
    completed: boolean;
}