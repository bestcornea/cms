export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titleen',
        maxLength: 96,
      },
    },
    {
      name: 'titleen',
      title: 'English Title',
      type: 'string',
    },
    {
      name: 'bodyen',
      title: 'English Body',
      type: 'markdown',
    },
    {
      name: 'titlenl',
      title: 'Dutch Title',
      type: 'string',
    },
    {
      name: 'bodynl',
      title: 'Dutch Body',
      type: 'markdown',
    },
    {
      name: 'titlefr',
      title: 'French Title',
      type: 'string',
    },
    {
      name: 'bodyfr',
      title: 'French Body',
      type: 'markdown',
    },
  ],
}
