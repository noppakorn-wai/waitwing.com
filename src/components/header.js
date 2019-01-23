import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import WIcon from '../images/waitwing.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#0e0e0e`,
      zIndex: 1,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <span>
          <WIcon style={{ width: 16, height: 16, transform: 'scale(1.6) translateY(1.2px)' }} />
          aitwing
        </span>
      </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
