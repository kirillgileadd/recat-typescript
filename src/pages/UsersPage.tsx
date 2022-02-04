import React, {useEffect} from 'react';
import {IUser} from "../types/types";
import List from "../component/List";
import UserItem from "../component/UserItem";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UsersPage = () => {
    const {users, error, loading} = useTypeSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
      fetchUsers()
    }, [])

    return !loading ?
        <List items={users}
              renderItem={(item: IUser) => <UserItem user={item} key={item.id}/>}
        /> : <h3>Loading...</h3>
};

export default UsersPage;