export const getTagsMap = articles => {
  const tagsMap = [];
  articles && articles.forEach(article => {
    article.taxonomy.tags.forEach(tag => {
      const mapIndex = tagsMap.findIndex(tagMapped => tagMapped.slug === tag.slug);
      if (mapIndex === -1) {
        tagsMap.push({
          slug: tag.slug,
          text: tag.text,
          count: 1
        });
      } else {
        tagsMap[mapIndex].count++;
      }
    })
  });
  return tagsMap.sort((tagA, tagB) => tagB.count - tagA.count);
}