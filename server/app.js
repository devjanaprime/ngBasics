var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );
var index = require( './modules/index' );

var port = process.env.PORT || 6789;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( 'public' ) );
app.use( '/', index );

app.listen( port, function(){
  console.log( 'server up on:', port );
}); //end listend
