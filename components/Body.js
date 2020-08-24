import Menu from '../components/Menu';
import Welcome from '../components/Welcome';
import Specials from '../components/Specials';
import FreshNotice from '../components/FreshNotice';

const Body = () => {
  return (
    <div>
      <Menu />
      <Welcome />
      <Specials />
      <FreshNotice />
    </div>
  );
};

export default Body;
