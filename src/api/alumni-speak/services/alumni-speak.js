'use strict';

/**
 * alumni-speak service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::alumni-speak.alumni-speak');
