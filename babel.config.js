// babel.config.js
module.exports = function(api){
  api.cache(true);
  return {
    presets: ['babel-preset-expo','@babel/preset-react'],
    plugins: ["tailwindcss-react-native/babel"],
  };
}