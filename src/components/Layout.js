import React from 'react';
import { Link } from 'react-router';

import Clock from './parts/Clock';

export default class Layout extends React.Component {
  state = {
    navLinks: [ 'login', 'create', 'about' ],
    footerText: 'Text in footer',
  }

  render() {
    const { navLinks, footerText } = this.state;
    const { children } = this.props;
    return (
      <div>
      	<header>
      		<nav>
		      	<Link to="/"><i className="fa fa-home" aria-hidden="true"/> Home</Link>
            {navLinks.map((item, index) => ( <Link to={item} key={index}>{item[0].toUpperCase() + item.substring(1)}</Link> ))}
            <div className="header-clock"><Clock /></div>
          
	      	</nav>

      	</header>
      	<div className="app-content">{children}</div>

      	<footer>{footerText}</footer>
      </div>
    );
  }
}
