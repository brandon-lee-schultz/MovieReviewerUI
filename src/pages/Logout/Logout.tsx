import { useLogoutAuthenticate } from "hooks/useAuthentication";
import './logout.css';

export function Logout() {
    useLogoutAuthenticate();

    return (<></>)
}