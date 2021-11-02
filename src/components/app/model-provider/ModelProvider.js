import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import filterReducer from '../../../models/filterModel';
import catalogReducer from '../../../models/catalogModel';

const ModelProvider = ({children}) => {
    
    const store = configureStore({
        reducer: {
            filter: filterReducer,
            catalog: catalogReducer
        },
    });

    return <Provider store={store}>{children}</Provider>
};

export default ModelProvider;