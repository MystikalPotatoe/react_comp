module.exports = {
    entry:'./source/client.js',
    output:{
        path:'./public',
        filename:'index.js'
    },
    devServer:{
        inline:true,
        contentBase:'./public',
        port:3000
    }
};
