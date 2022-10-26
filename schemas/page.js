export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'titleen',
      title: 'English Title',
      type: 'string',
    },
    {
      name: 'linktitleen',
      title: 'English Link Title (shorter)',
      type: 'string',
    },
    {
      name: 'leaden',
      title: 'English Lead',
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
      name: 'linktitlenl',
      title: 'Dutch Link Title (shorter)',
      type: 'string',
    },
    {
      name: 'leadnl',
      title: 'Dutch Lead',
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
      name: 'linktitlefr',
      title: 'French Link Title (shorter)',
      type: 'string',
    },
    {
      name: 'leadfr',
      title: 'French Lead',
      type: 'string',
    },
    {
      name: 'bodyfr',
      title: 'French Body',
      type: 'markdown',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titleen',
        maxLength: 96,
      },
    },
  ],
}
