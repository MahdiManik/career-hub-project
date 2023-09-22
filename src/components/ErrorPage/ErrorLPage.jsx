import { Link } from "react-router-dom";

const ErrorLPage = () => {
    return (
        <div>
            <h4>Oops!!!</h4>
            <button><Link to={'/'}>Go Home</Link></button>
        </div>
    );
};

export default ErrorLPage;