import React, { Component } from 'react';

const routeReverseIcon = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABxElEQVQ4T5XUTYiNcRTH8c+QpORlycZQQhk2LESZhYxS8lIsSDYowkKE2RMhNIQNK0svsSCKhWbBwooiw0qikNgoolPnTv/7eO6de0899XTO73zPec7/+Z8erW0u1mMJZqTsI57hFt4VqacxgL6eGt48nMHaNsX+4g4OYT/24TumVYHbcBWT2sDK0B+MT8d/wO24jrLIDzzC60yaj1WYXFOwCbgoZzMxhVH5OE7hZyV5Kp4jZlxaE/AJVmb0Nzbibk0X0f0V7GzXYZxiVGzYMZxoMcPwH2kRG+3wJA6n6BNm4VeLpC1YU5lzQ/o5OPEJj9Gf3jjh3R2ecK0sgG+KAR/AhS6By7Epu/4awBHMScheXOoSGE2cy5yRAA5jWTrO4mCXwCFEI2HDAbyIPemIz4+fN65WJzYObzE7xUMBXI0HRfZW3OiEhh24VmgHAhjPSyzIwDeswKsxoH14iimpC/3Cxr2N1XO/AHzBLtxsAd2My5ie8RhRMB6WiyDu7tEK4EVCYzmENlZb/CKLK7rIHQxfCYz3uDWx47qxyBm9jnULdh3Oo3cM6vtcrvdKXR0w4hOwIZ+lmJlJH3KRxGxvIzZTk/0DgKJVDQMZ4OgAAAAASUVORK5CYII=)';

class RouteReverse extends Component {
  onClick() {
    let startIcons = document.querySelectorAll('.leaflet-objects-pane .start-icon');
    if (!startIcons.length) return false;

    let start = startIcons[startIcons.length - 1];
    start.click();
  }

  render() {
    return (
      <div className="button" tabIndex="0" title="Complete out-and-back route" onClick={this.onClick}> 
        <div className="icon" style={{backgroundImage: routeReverseIcon, backgroundSize: 'contain'}} />
        <div className="label">Out & Back</div>
      </div>
    );
  }
}

export default RouteReverse;
