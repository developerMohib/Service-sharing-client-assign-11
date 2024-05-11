
import Blog from '../../Component/Blog/Blog';
import Carrousel from '../../Component/Carrousel/Carrousel';
import Filter from '../../Component/Filter/Filter';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
import Team from '../../Component/Team/Team';

const Home = () => {
    return (
        <div>
            <Carrousel> </Carrousel>
            <Filter> </Filter>
            <ServiceCard> </ServiceCard>
            <Blog> </Blog>
            <Team> </Team>
        </div>
    );
};

export default Home;