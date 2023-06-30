export default {
  name: 'stats',
  title: 'Stats',
  type: 'document',
  fields: [
    {
      name: 'totalHours',
      title: 'Total Hours',
      type: 'number',
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};