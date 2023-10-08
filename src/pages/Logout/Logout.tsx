import { logout } from "hooks/useAuthentication";
import { useEffect } from "react";
import './logout.css';

export function Logout() {
    useEffect(() => {
        logout();
    }, []);

    return (<></>)
}