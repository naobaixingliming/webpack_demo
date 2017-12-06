const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');

const config={
    entry:'./src/app.js',                                   //入口文件
    output:{
        path:path.resolve(__dirname,'dist/'),         //打包后的输出路径--绝对路径
        filename:'assets/js/app.js' ,                 //打包后的输出的文件名
        publicPath:'http://localhost:8080/project/study_webpack/dist/'         //所有资源的基础路径，必须以 / 结尾  [http://localhost:8080/project/study_webpack/dist]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    module:{
        rules:[
            {
                test:/\.js$/,                       //匹配所有 .js 文件
                use:[{                              //当匹配到js后，
                    loader:'babel-loader'
                }],
                exclude:[//排除
                    path.resolve(__dirname,'node_modules')
                ]           
            },
            //处理css文件中出现的url，会自动帮你引入里面要引入的模块
            //[path]-[name]-[local]_[hash:base64:6]
            {
                test:/\.css$/,                      //匹配所有 .css 文件
                //use:['style-loader','css-loader']   
                use:['style-loader',{               //css 模块化
                    loader:'css-loader',
                    options:{
                        module:true,
                        localIdentName:'[name]-[local]_[hash:base64:6]'
                    }
                }],
                exclude:[//排除css模块化
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common')
                ]    
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                include:[
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common')
                ]
            },            
            {
                test:/\.scss$/,                      //匹配所有 .scss 文件  
                use:[
                    'style-loader',
                    {               //scss 模块化
                        loader:'css-loader',
                        options:{
                            module:true,
                            localIdentName:'[name]-[local]_[hash:base64:6]'
                        }
                    },
                    'sass-loader'
                ],
                exclude:[//排除css模块化
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common')
                ]    
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
                include:[
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common')
                ]
            },
            {
                test:/\.less$/,                      //匹配所有 .less 文件  
                use:[
                    'style-loader',
                    {               //scss 模块化
                        loader:'css-loader',
                        options:{
                            module:true,
                            localIdentName:'[name]-[local]_[hash:base64:6]'
                        }
                    },
                    'less-loader'
                ],
                exclude:[//排除css模块化
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common')
                ]    
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader'],
                include:[
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common')
                ]
            },

            //file-loader:
            //      1.把资源移动到输出目录
            //      2.返回最终引入资源的url
            {
                test:/\.(jpg|png|jpeg|gif)$/,       //匹配所有 .jpg 图片  use:['file-loader']
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:10000 ,                //单位为byte ,约束编码，小于10000B时，编译成base64
                        name:'assets/img/[name]_[hash:6].[ext]'
                    }
                }]
            },
            {
                test:/\.(ttf|eot|woff|svg|woff2)$/,                      //匹配所有 font 文件
                use:[{
                        loader:'file-loader', 
                        options:{
                            name:'assets/fonts/[name]_[hash:6].[ext]'                 //单位为byte ,约束编码，小于10000B时，编译成base64
                        }
                    }]
            }
        ]
    },

    devServer:{
        open:true,                                  //自动打开浏览器
        port:8888,
        contentBase:'./src/common',
        //服务器打包后资源的输出路径
        publicPath:'/'
       
    }
}
module.exports=config;