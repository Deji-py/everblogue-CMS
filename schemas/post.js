export default {
  title: 'Post',
  name: 'post',
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
      type: 'slug',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
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
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
