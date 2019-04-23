import 'angular';
import 'angular-mocks/angular-mocks';
import 'promise-polyfill/src/polyfill';
import 'babel-polyfill';

let context = require.context('./src/scripts/', true, /\.js/);
context.keys().forEach(context);