/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {{x: number, y: number}} point object
 */
export const point = (x, y) => ({ x: x | 0, y: y | 0 });

/**
 * 
 * @param {string} color CSS color string 
 * @param {*} width Line width
 * @returns {{color: string, width: number}} stroke object
 */
export const stroke = (color, width) => ({ color, width: width | 0 });

export const NotImplemented = (type, name) => { throw new Error(`Not Implemented: ${type} ${name}`); }

export const Constants = { TWO_PI: Math.PI * 2 }