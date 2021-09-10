import { getTagsMap } from '../../utils/tags.js';
import { articles } from '../../config/jest/__mocks__/articlesResponseMock';

describe('Dado un array de articulos, getTagsMap devuelve un mapa del conjunto total de tags, contabilizados, y ordenados', () => {
  test('Sin datos getTagsMap devuelve un array vacio', () => {
    const tagsMap = getTagsMap([]);
    expect(tagsMap).toStrictEqual([])
  });
  test('Agrupa los tags en un unico array', () => {
    const tagsMap = getTagsMap(articles);
    expect(tagsMap.length).toBe(11);
  });
  test('Los tags estan contabilizados segun su identificador unico', () => {
    const tagsMap = getTagsMap(articles);
    expect(tagsMap[0].count).toBeDefined();
    expect(tagsMap[0].count).toBe(3);
  });
  test('el array debe estar ordenado de mayor a menor segun su cuenta', () => {
    const tagsMap = getTagsMap(articles);
    const sortedTagsMap = tagsMap.sort((tagA, tagB) => tagB.count - tagA.count);
    expect(tagsMap).toStrictEqual(sortedTagsMap);
  });
})