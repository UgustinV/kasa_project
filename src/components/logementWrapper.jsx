import { useParams, Navigate } from 'react-router'

import Logement from '../pages/Logement.jsx';

const LogementWrapper = ({data}) => {
    const { id } = useParams();
    const logementExists = data.find(item => item.id === id);
    
    if (!logementExists) {
        return <Navigate to="/not-found" replace />;
    }
    
    return <Logement data={data} />;
};

export default LogementWrapper;