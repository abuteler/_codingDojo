import Etiquetas from '../../../components/Listado/Etiquetas';
import { getTagsMap } from '../../../utils/tags.js';
import { articles } from '../../../config/jest/__mocks__/articlesResponseMock';

describe('Tests de componente Etiquetas', () => {
  test('se renderizan un maximo de 10 etiquetas', () => {
    const tagsMap = getTagsMap(articles);
    const component = shallow(<Etiquetas tags={tagsMap} />);
    expect(tagsMap.length).toBe(11);
    expect(component).toContainMatchingElements(10, 'a');
  });

});
