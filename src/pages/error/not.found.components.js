import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/'); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}

export default NotFoundPage;
