export default {
  name: 'trendingPost',
  type: 'document',
  title: 'Trending Post',
  fields: [
    {
      name: 'post',
      type: 'reference',
      title: 'Referenced Post',
      to: [{type: 'post'}], // This defines that the reference is to the "post" schema
    },
  ],
}
