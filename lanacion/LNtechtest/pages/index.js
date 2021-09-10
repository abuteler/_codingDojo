import fetch from 'node-fetch';
import { Header, TopBanner, Listado, SideBanner } from '../components/index';

const contentContainerStyle = {
  paddingTop: 100,
  display: 'fixed',
};
const contentLayoutStyle = {
  display: 'flex',
  justifyContent: 'center',
};

function Index ({ data: { articles } }) {
  return (<div className="site-layout">
    <Header />
    <main className="content-container" style={contentContainerStyle}>
      <TopBanner />
      <div className="content-layout" style={contentLayoutStyle}>
        <Listado articles={articles} />
        <SideBanner />
      </div>
    </main>
  </div>);
}

export async function getServerSideProps () {
  const res = await fetch('https://api-test-ln.herokuapp.com/articles');
  const data = await res.json();
  return {
    props: {
      data,
    }
  };
}

export default Index;