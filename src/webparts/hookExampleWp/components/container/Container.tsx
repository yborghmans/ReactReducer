import * as React from 'react';
import { SessionService } from '../../services/SessionService';
import { SessionList } from '../list/SessionList';
import ISession from '../../interfaces/ISession';
import { Form } from '../form/Form';
import { sessionReducer } from '../reducer/reducer';

export const GlobalContext = React.createContext(undefined);

export const Container = (props) => {

    const [sessionItems, dispatch] = React.useReducer(sessionReducer, []);
    const { GetSessions } = SessionService();

    // async
    React.useEffect(() => {
        GetSessions(props.httpClient).then((data) => {
            data.map(item => {
                dispatch({ type: "ADD_SESSION", session: item });
            });
        });
    }, []);

    return (
        <GlobalContext.Provider value={{ sessionItems, dispatch }}>
            <div className="ms-Grid-row">
                <h1>Session list Microsoft Virtual Marathon - demo</h1>
            </div>
            <div className="ms-Grid-row">
                <SessionList />
            </div>
            <div className="ms-Grid-row">
                <Form />
            </div>
        </GlobalContext.Provider>

    );
};

