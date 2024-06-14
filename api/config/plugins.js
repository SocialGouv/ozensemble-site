module.exports = () => ({
    'sitemap': {
        enabled: true,
        config: {
          cron: '0 0 0 * * *',
          limit: 45000,
          xsl: true,
          autoGenerate: false,
          caching: true,
          allowedFields: ['id', 'uid'],
          excludedTypes: [],
        },
      },
});
