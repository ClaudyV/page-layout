import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Home
    </>
  );
};

export default Home;
