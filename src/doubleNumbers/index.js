/* eslint-disable-next-line */
export const doubleNum = num => {
  const stringNum = num.toString();
  const numLength = stringNum.length;
  let result = num * 2;
  if ( numLength >= 2 && numLength % 2 === 0 ){
    const firstPart = stringNum.slice( 0, numLength / 2 );
    const secondPart = stringNum.slice( numLength / 2, numLength );
    result = ( firstPart === secondPart ) ? num : num * 2;
  }
  return result;
};
