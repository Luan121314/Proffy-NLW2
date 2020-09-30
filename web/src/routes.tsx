import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';

const Routes =()=>{
    return(
        <BrowserRouter>
            <Route path='/' component={Landing} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/study' component={TeacherList}/>
            <Route path='/give-classes' component={TeacherForm}/>

        </BrowserRouter>
    )
}

export default Routes