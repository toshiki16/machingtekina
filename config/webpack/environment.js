const { environment } = require('@rails/webpacker')



// const customConfig = {
//   resolve: {
//     fallback: {
//       dgram: false,
//       fs: false,
//       net: false,
//       tls: false,
//       child_process: false
//     }
//   }
// };

// environment.config.delete('node.dgram')
// environment.config.delete('node.fs')
// environment.config.delete('node.net')
// environment.config.delete('node.tls')
// environment.config.delete('node.child_process')

// environment.config.merge(customConfig);

const path = require("path")

const customConfig = {
  module: {
    rules: [
      {
        test: /.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', {
          loader: 'postcss-loader', options: {
            postcssOptions: {
              config: path.resolve(__dirname, '../../postcss.config.js')
            }
          }
        }],
      }
    ]
  }
}
environment.config.merge(customConfig);
module.exports = environment


const webpack = require('webpack')
environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Popper: ['popper.js', 'default']
  })
)
