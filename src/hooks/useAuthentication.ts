import { useState } from "react";

interface UseAuthentication {
    authenticated: boolean;
}

export function useLoginAuthenticate(username: string, password: string): UseAuthentication {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    if (username === "" || password === "") 
    {
        return {
            authenticated: isAuthenticated
        } 
    }

    fetch(`https://localhost:7175/User?username=${username}&password=${password}`)
    .then((response) => response.json())
    .then((data) => {
        if (username === data.username && password === data.password)
        {
            sessionStorage.setItem("userId", data.id);
            setIsAuthenticated(true);
        }
    }).finally(() => {
        sessionStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    });
    
    return {
        authenticated: isAuthenticated
    }
}

export function useLogoutAuthenticate(): UseAuthentication {
    sessionStorage.removeItem("isAuthenticated");

    return {
        authenticated: false
    }
}