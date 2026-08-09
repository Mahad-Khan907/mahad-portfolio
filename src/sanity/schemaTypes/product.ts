export const productSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'projectId',
        title: 'Project ID',
        description: 'Display order — 1 shows first, 2 shows second, and so on.',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        }
    ],
  }
