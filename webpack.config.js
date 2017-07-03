module.exports = {
    entry:['babel-polyfill','./source/client.js'],
    output:{
        path:'./public',
        filename:'index.js'
    },
    devServer:{
        inline:true,
        contentBase:'./public',
        port:8080
    },
    module:{
        loaders:[
                {
                test: /\.js$/,
                loader:'babel',
                query: {
                    cacheDirectory:true,
                    presets: ['env','react']
                }
            }
        ]
    }
};
