import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate } from "react-router-dom";
import {useTypeSelector} from "../hooks/useTypeSelector";

interface UserItemPageNavigate {
    [x:string]:string;
    id: string
}


const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const {id} = useParams<UserItemPageNavigate>()
    const navigate = useNavigate();
    console.log(navigate)


    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            let response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id)
            setUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h3>
                {user?.name}
            </h3>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;