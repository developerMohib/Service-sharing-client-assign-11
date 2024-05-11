
import Blog from '../../Component/Blog/Blog';
import Carrousel from '../../Component/Carrousel/Carrousel';
import Filter from '../../Component/Filter/Filter';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';

const Home = () => {
    return (
        <div>
            <Carrousel> </Carrousel>
            <Filter> </Filter>
            <ServiceCard> </ServiceCard>
            <Blog> </Blog>
        </div>
    );
};

export default Home;