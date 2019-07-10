# NextJS with AntDesign Starter

## NPM scripts

**dev:** Starts the dev server

**build:** Builds the app for production

**start:** Starts the production build of the app

## Configure ant-design with nextjs
- Install the following npm packages
    
      npm install --save antd babel-plugin-import null-loader
      npm install --save-dev @zeit/next-css
    
- Create `.babelrc` file with following contents

      {
        "presets": ["next/babel"],
        "plugins": [
          [
            "import",
            {
              "libraryName": "antd",
              "style": "css"
            }
          ]
        ]
      }

- Add the following in the next.config.js

      const withCss = require('@zeit/next-css')
      
      module.exports = withCss({
        webpack: (config, { isServer }) => {
          if (isServer) {
            const antStyles = /antd\/.*?\/style\/css.*?/
            const origExternals = [...config.externals]
            config.externals = [
              (context, request, callback) => {
                if (request.match(antStyles)) return callback()
                if (typeof origExternals[0] === 'function') {
                  origExternals[0](context, request, callback)
                } else {
                  callback()
                }
              },
              ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ]
      
            config.module.rules.unshift({
              test: antStyles,
              use: 'null-loader',
            })
          }
          return config
        },
      })
      
- In case you also need the next-sass loader
    
      const withSass = require('@zeit/next-sass')
      const withCss = require('@zeit/next-css')
      
      module.exports = withCss(withSass({
        webpack: (config, { isServer }) => {
          if (isServer) {
            const antStyles = /antd\/.*?\/style\/css.*?/
            const origExternals = [...config.externals]
            config.externals = [
              (context, request, callback) => {
                if (request.match(antStyles)) return callback()
                if (typeof origExternals[0] === 'function') {
                  origExternals[0](context, request, callback)
                } else {
                  callback()
                }
              },
              ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ]
      
            config.module.rules.unshift({
              test: antStyles,
              use: 'null-loader',
            })
          }
          return config
        },
      }))
