import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate();

    navigate("/login");
}