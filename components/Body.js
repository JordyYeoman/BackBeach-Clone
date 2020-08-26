import Menu from '../components/Menu';
import Welcome from '../components/Welcome';
import Specials from '../components/Specials';
import FreshNotice from '../components/FreshNotice';
import Reviews from '../components/Reviews';
import SignUp from '../components/SignUp';
import Socials from '../components/Socials';
import Contact from '../components/Contact';

const Body = () => {
  return (
    <div>
      <Menu />
      <Welcome />
      <Specials />
      <FreshNotice />
      <Reviews />
      <SignUp />
      <Socials />
      <Contact />
    </div>
  );
};

export default Body;
