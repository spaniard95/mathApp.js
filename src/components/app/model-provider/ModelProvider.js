import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import filterReducer from '../../../models/filter/filterSlice';
const ModelProvider = ({options, children}) => {
    
    const store = configureStore({
        reducer: {
            filter: filterReducer,
        },
    });

    return <Provider store={store}>{children}</Provider>
}

export default ModelProvider;