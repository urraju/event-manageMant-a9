import { Navigate, useLocation } from "react-router-dom";
import ManageAuth from "../ManageAuth/ManageAuth";

const PrivateRouter = ({ children }) => {
  const { user, loading } = ManageAuth();
  const location = useLocation();

  if (loading)
    return (
      <div className="w-9/12 mx-auto flex justify-center">
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  if (user) return children;

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
