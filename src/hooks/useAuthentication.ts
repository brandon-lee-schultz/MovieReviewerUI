interface UseAuthentication {
    authenticated: boolean;
}

export function login(username: string, password: string): UseAuthentication {
    if (username === "admin" && password === "123")
        {
            sessionStorage.setItem("isAuthenticated", "true");

            return {
                authenticated: true
            };
        }
   
    return {
        authenticated: false
    }
}

export function logout(): UseAuthentication {
    sessionStorage.removeItem("isAuthenticated");

    return {
        authenticated: false
    }
}