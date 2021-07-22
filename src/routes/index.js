import React, { useContext } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

import history from '../services/history';

import { Context } from '../context/AuthContext';

import Home from '../views/Home';
import Task from '../views/Task';
import Login from '../views/Login';

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);

    if (loading) {
        return <div />;
    }

    if (isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />
}

export default function Routes() {
    return(
        <AuthProvider>
            <Router history={history}>
                <Switch>
                    <CustomRoute path="/login" exact component={Login} />
                    <CustomRoute isPrivate path="/tasks" exact component={Home} />
                    <CustomRoute isPrivate path="/tasks/new" exact component={Task} />
                    <CustomRoute isPrivate path="/tasks/:id" exact component={Task} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}