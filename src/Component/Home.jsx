import Bannar from "./Bannar";
import Products from "./Products";
import { Helmet } from 'react-helmet';



const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home/Gadget Heaven</title>
      </Helmet>
        <Bannar></Bannar>
        <Products></Products>


        </div>
    );
};

export default Home;