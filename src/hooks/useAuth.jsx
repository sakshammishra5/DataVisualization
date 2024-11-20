import { useContext, useEffect, useState } from 'react';
import { AppContext } from "../context/AppContext";

const useAuth = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sendAuthToken = async () => {
            const token = JSON.parse(localStorage.getItem('token'));
            try {
                let response = await fetch('http://localhost:3000/checkauth', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });

                if (response.status === 200) {
                    setIsAuthenticated(true);
                } else if (response.status === 401) {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Error during authentication check:', error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };
        sendAuthToken();
    }, [setIsAuthenticated]);

    return { isAuthenticated, loading };
};

export default useAuth;
 