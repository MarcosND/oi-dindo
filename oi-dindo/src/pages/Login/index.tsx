import { FunctionComponent } from "react";
import { useApi } from "../../contexts/api";

interface LoginPageProps {
    
}
 
const LoginPage: FunctionComponent<LoginPageProps> = () => {

    const api = useApi();

    return <>Login</>;
}
 
export default LoginPage;