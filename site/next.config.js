/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config) => {
    // Add a rule for handling mp3 files
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'sounds/',
            publicPath: '/sounds/', // Adjust the public path as needed
            esModule: false, // Ensure proper handling of ES modules
          },
        },
      ],
    });

    // Return the updated configuration
    return config;
  },
};

