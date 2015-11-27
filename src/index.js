import { createAction } from 'redux-actions';
import createOneShotMiddleware from 'redux-middleware-oneshot';
import { NetInfo } from 'react-native';

export const TYPE = 'REDUX_MIDDLEWARE_REACT_NATIVE_NETINFO';
export const action = createAction(TYPE);
export const middleware = createOneShotMiddleware((dispatch) => {
    const handle = (isConnected) => dispatch(action({ isConnected }));
    NetInfo.isConnected.fetch().done(handle);
    NetInfo.isConnected.addEventListener('change', handle);
});
