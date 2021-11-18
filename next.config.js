module.exports = {
  reactStrictMode: true, // was there by default
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.csv$/i,
      loader: "csv-loader",
      options: {
        header: true
      }
    });

    // Important: return the modified config
    return config;
  }
};
