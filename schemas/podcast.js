export default podcast = {
  title: 'Podcast',
  name: 'podcast',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'audio',
      title: 'Audio',
      type: 'file',
      options: {accept: 'audio/*'},
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference', // Change type to reference
      to: [{type: 'category'}], // Replace 'category' with the actual name of the 'Category' schema
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference', // Change type to reference
      to: [{type: 'author'}], // Replace 'author' with the actual name of the 'Author' schema
    },
  ],
}
