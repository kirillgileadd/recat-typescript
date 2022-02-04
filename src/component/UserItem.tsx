import React, {FC} from 'react';
import {IUser} from "../types/types";
import {Link} from 'react-router-dom'

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return <div style={{padding: 15, border: '1px solid lightpink', margin: '6px 0 6px 0'}}>
            <Link to={user.id + ''}>
            {user.id}. {user.name} {user.email}. Проживает по адресу: {user.address.city}.
            На улице: {user.address.street}
            </Link>
        </div>
};

export default UserItem;