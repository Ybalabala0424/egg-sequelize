/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1553175743605_7757';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.sequelize={
      dialect:'mysql',
      host:'127.0.0.1',
      port:3306,
      database:'egg-sequelize-doc-default',
      username:'root',
      password:null
  }
  return {
    ...config,
    ...userConfig,
  };
};
