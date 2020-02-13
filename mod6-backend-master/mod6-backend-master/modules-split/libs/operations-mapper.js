'use strict';

const operationsMapper = {
  sum: 'sumar',
  sub: 'restar',
};

/**
 * @param {String} operationName ['sum' | 'sub']
 * @returns {String} operationCompleteName
 */
function operation2String(operationName) {
  if (operationsMapper[operationName]) {
    return operationsMapper[operationName];
  }

  return null;
}

module.exports = operation2String;
