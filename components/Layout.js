import Head from 'next/head';
import Navigation from '../components/Navigation.js';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-auto">
      <Head>
        <title>Beach Resturaunt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navigation />
      <div className="content-wrapper pb-8 sm:pb-0">{children}</div>
    </div>
  );
};

export default Layout;
