'use strict';

module.exports = class UIKit
{
    static get path()
    {
        return __dirname + '/templates';
    }

    static get form()
    {
        return this.path + '/form';
    }

    static get helper()
    {
        return this.path + '/helper';
    }
}