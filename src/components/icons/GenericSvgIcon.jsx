import React from 'react';

const GenericClickableSvgIcon = (props) => {
  return <a href={props.url} style={{all:"unset", margin: '0px 10px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi" viewBox="0 0 16 16" style={{ margin: "0 8" }}>
      {props.children}
    </svg>
  </a >
}

export default GenericClickableSvgIcon;