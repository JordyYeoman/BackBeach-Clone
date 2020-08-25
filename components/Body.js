import Menu from '../components/Menu';
import Welcome from '../components/Welcome';
import Specials from '../components/Specials';
import FreshNotice from '../components/FreshNotice';
import Reviews from '../components/Reviews';

const Body = () => {
  return (
    <div>
      <Menu />
      <Welcome />
      <Specials />
      <FreshNotice />
      <Reviews />
    </div>
  );
};

export default Body;
