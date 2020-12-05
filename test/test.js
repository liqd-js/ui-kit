'use strict';

const Server = require('@liqd-js/server');
const Template = require('@liqd-js/template');
const UIKit = require('../lib/ui_kit');

const server = new Server();
const template = new Template({ directories: [ UIKit.path, __dirname + '/templates' ]});

server.get( '/form', async( req, res ) =>
{
    res.reply( await template.render( 'Form', {}), 'text/html' );
});

server.get( async( req, res ) =>
{
    console.log( 'tu som' );

    res.reply( await template.render( 'Index', {}), 'text/html' );
});

server.listen( 8081 );