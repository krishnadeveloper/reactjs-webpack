import express from "express";
import webpack from "webpack";
import path from "path";
import webpackMiddleware from "webpack-dev-middleware";
//import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpackConfig.dev";

let app = express();
const compiler = webpack(webpackConfig) ;
app.use(webpackMiddleware(compiler));
// app.use(webpackHotMiddleware(compiler,{
//     hot: true,
//     publicPath: webpackConfig.output.publicPath,
//     noInfo: true,
// }));

app.post('/api/usersignup',(req,res)=>{
    res.send(200).json(req);
});
 app.get('/*',(req,res,next) => {
    res.sendFile(path.join(__dirname,'index.html'));
 });

 app.listen(3000, ()=>{console.log('Server running on port 3000')});