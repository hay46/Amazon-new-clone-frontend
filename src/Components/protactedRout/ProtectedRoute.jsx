import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from "../dataprovider/Dataprovider"

const ProtectedRoute = ({ children, msg, redirect }) => {
    const [{ user }] = useStateValue();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            // ተጠቃሚው ከሌለ ወደ Auth ገጽ ይላካል፣ የነበረበትን ገጽ መረጃ ይዞ
            navigate("/Auth", { state: { msg, redirect } });
        }
    }, [user, navigate, msg, redirect]);

    return user ? children : null;
};

export default ProtectedRoute;