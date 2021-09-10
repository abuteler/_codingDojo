import { Header, TopBanner, Listado, SideBanner } from '../../components/index';
import { articles } from '../../config/jest/__mocks__/articlesResponseMock';

describe('Tests básicos de la pagina principal', () => {
  let wrapper;
  test('El componente Header existe', () => {
    wrapper = shallow(<Header />);
    expect(wrapper).toExist();
  });
  test('El componente TopBanner existe', () => {
    wrapper = shallow(<TopBanner />);
    expect(wrapper).toExist();
  });
  test('El componente Header existe', () => {
    wrapper = shallow(<Listado articles={articles} />);
    expect(wrapper).toExist();
  });
  test('El componente Header existe', () => {
    wrapper = shallow(<SideBanner />);
    expect(wrapper).toExist();
  });
});
