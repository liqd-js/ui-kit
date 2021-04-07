'use strict';

module.exports = class UIKit
{
    static get path()
    {
        return __dirname + '/templates';
    }

    static get form()
    {
        return this.path + '/Form';
    }

    static get helper()
    {
        return this.path + '/Helper';
    }
}