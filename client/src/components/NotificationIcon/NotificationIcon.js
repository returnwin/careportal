import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
import './NotificationIcon.css';

class NotificationIcon extends Component {
    render() {
      return (
        <div>
          <Button className='notificationIcon'>
            {this.props.title}
            <Badge className='notificationCounter'>4</Badge>
          </Button>
        </div>
      );
    }
  }

  export default NotificationIcon;