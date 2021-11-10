import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import filterReducer from '../../../models/filterModel';
import catalogReducer from '../../../models/catalogModel';
import persistState from '../../../library/persistState';

const ModelProvider = ({children, options={name: "mathapp"}}) => {
    
    const { initialState, persistStateMiddleware } = persistState(options.appName);
    
    const store = configureStore({
        reducer: {
            filter: filterReducer,
            catalog: catalogReducer
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().
            concat(persistStateMiddleware),
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState: initialState,
    });

    return <Provider store={store}>{children}</Provider>
};

export default ModelProvider;