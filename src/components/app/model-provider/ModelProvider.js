import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import filterReducer from '../../../models/filterModel';

const ModelProvider = ({children}) => {
    
    const store = configureStore({
        reducer: {
            filter: filterReducer,
        },
    });

    return <Provider store={store}>{children}</Provider>
};

export default ModelProvider;