export default {
  title: 'TendingPosts',
  name: 'trendingPosts',
  type: 'document',
  fields: [
    {
      name: 'post',
      title: 'Post',
      type: 'reference', // Change type to reference
      to: [{type: 'post'}], // Replace 'category' with the actual name of the 'Category' schema
    },
  ],
}
