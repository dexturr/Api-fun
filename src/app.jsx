import React, { useEffect, useState } from 'react';
import withLoading from './components/loading/with-loading';
import Page from './components/page/page';

const WrappedPage = withLoading(Page);

// TODO need to test but need a fetch mock.
const App = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    useEffect( () => {
        const fetchGenData = async () => {
            const response = await fetch('https://api.carbonintensity.org.uk/generation');
            if (response.status === 200) {
                const data = await response.json();
                setData(data);
                setLoading(false);
            } else {
                // TODO error handling
            }
        }
        fetchGenData();
    })
    return <WrappedPage loading={loading} data={data} />
};

export default App;