import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';
import {Input, Icon} from 'semantic-ui-react';

export default () => {
  return (
    <Menu style={{ marginTop: '10px',marginLeft:'80px',marginRight:'80px' }} >


      <Link route="/" >

        <a className="item"><b>KYChain</b></a>
      </Link>

      <Menu.Menu position="right">

      <Link route="/kyc/show">
        <a className="item"><b>View your details</b></a>
      </Link>

        <Link route="/">
          <a className="item"><b>Create User</b></a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
