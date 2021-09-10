import PreviewArticulo from '../../../components/Listado/PreviewArticulo';
import { articles } from '../../../config/jest/__mocks__/articlesResponseMock';

describe('Tests de componente PreviewArticulo', () => {
  test('Debe tener dos links, uno para la imagen y otro para el titulo.', () => {
    const component = shallow(<PreviewArticulo article={articles[0]} />);
    
    expect(component).toContainMatchingElements(2, 'a');
  });
  test('Debe tener un titulo.', () => {
    const component = shallow(<PreviewArticulo article={articles[0]} />);
    
    expect(component).toContainMatchingElements(1, 'h2');
  });
  test('Debe tener una fecha.', () => {
    const component = shallow(<PreviewArticulo article={articles[0]} />);
    
    expect(component).toContainMatchingElements(1, 'h4');
  });

});
