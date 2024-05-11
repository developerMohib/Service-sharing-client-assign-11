
import Blog from '../../Component/Blog/Blog';
import Carrousel from '../../Component/Carrousel/Carrousel';
import Filter from '../../Component/Filter/Filter';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
import Team from '../../Component/Team/Team';
import Testominal from '../../Component/Testominal/Testominal';

const Home = () => {
    return (
        <div>
            <Carrousel> </Carrousel>
            <Filter> </Filter>
            <ServiceCard> </ServiceCard>
            <Blog> </Blog>
            <Team> </Team>
            <Testominal> </Testominal>
        </div>
    );
};

export default Home;