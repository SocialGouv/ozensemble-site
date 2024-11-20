module.exports = ({ env }) => ({
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
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('bucket_access_key'),
          secretAccessKey: env('bucket_secret_key'),
          region: env('bucket_region'),
          endpoint: env('bucket_endpoint'),
          params: {
            ACL: 'public-read',
            signedUrlExpires: 15 * 60,
            Bucket: env('ozensemble-dev-app'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
});
