import React, { PureComponent } from 'react';
import { PROP_TYPES } from 'constants';

import './styles.scss';

class VidReply extends PureComponent {
  render() {
    return (
      <div className="rw-video">
        <b className="rw-video-title">
          { this.props.message.get('title') }
        </b>
        <div className="rw-video-details">
          <div className="rw-videoFrame">
            <video controls autoPlay="autoplay" height="100%" width="100%">
              <source src={this.props.message.get('video')} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    );
  }
}

VidReply.propTypes = {
  message: PROP_TYPES.VIDREPLY
};

export default VidReply;
