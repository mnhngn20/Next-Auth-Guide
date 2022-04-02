/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

const withAntdLess = require('next-plugin-antd-less')({
  lessVarsFilePath: './src/configs/theme/index.less',
  lessVarsFilePathAppendToEndOfContent: true,
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins([withAntdLess], nextConfig);
