import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import ToDosPage from "./pages/ToDosPage";
import UsersPage from "./pages/UsersPage";
import UserItemPage from "./component/UserItemPage";


function App() {
    return (
        <div>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
          <Routes>
              <Route path={'/users'} element={<UsersPage/>}/>
              <Route path={'/todos'} element={<ToDosPage/>}/>
              <Route path={'/users/:id'} element={<UserItemPage/>}/>
              {/*<Route path={'/todos/:id'} element={<ToDosPage/>}/>*/}
          </Routes>
        </div>
    );
}

export default App;
