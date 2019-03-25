import * as React from 'react';

/**
 * Just for demoing data in browser
 * @param data
 * @returns {*}
 * @constructor
 */
export const Displayer = ({data}) => {
  if (!!data) {
    return (
      <div>
        {
          Object.keys(data).map(key => {
            return (<div>{data[key].toString()}</div>)
          })
        }
      </div>
    );
  }

  return (<div> No Data </div>)
};
