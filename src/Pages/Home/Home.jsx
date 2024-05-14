
import { Helmet } from 'react-helmet-async';
import Blog from '../../Component/Blog/Blog';
import Carrousel from '../../Component/Carrousel/Carrousel';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
import Team from '../../Component/Team/Team';
import Testominal from '../../Component/Testominal/Testominal';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Home | Simple service sharing web application </title>
            </Helmet>
            <Carrousel> </Carrousel>
            <ServiceCard> </ServiceCard>
            <Blog> </Blog>
            <Team> </Team>
            <Testominal> </Testominal>
        </div>
    );
};

export default Home;