// Dependencies
import { Link } from "react-router-dom";
// Components
import Layout from "../components/Layout";
// Assets
import notFoundImage from "../assets/images/404.svg";

const NotFound = () => {
  return (
    <Layout>
      <div className="w-full flex justify-center mt-8 mb-16">
        <div className="w-4/5 flex flex-col items-center gap-4">
          <img src={notFoundImage} alt="page not found" className="w-[500px]" />
          <h1 className="text-4xl font-bold">Oooooops! parece que esta página no existe</h1>
          <Link to="/" className="text-xl text-blue-500">
            Ir al inicio
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;