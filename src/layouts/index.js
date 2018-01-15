import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import '../sass/fonts.scss'

const Wrapper = ({ children }) => (
  <div>
    <Helmet
      title="Very Austin | 2018"
      meta={[
        { name: 'description', content: 'Web development portfolio for Austin Lauritsen' },
        {
          name: 'keywords', content: ['Web Design', 'Web Development', 'Amazon Web Services',
            'Certified Architect', 'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Redux',
            'NodeJS', 'Webpack', 'Babel', 'Gulp', 'Grunt', 'Jest', 'Grunt', 'Mocha',
            'Chai', 'NPM', 'Wordpress', 'Ghost']
        }
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        fontFamily: 'HelveticaNeue-Thin'
      }}
    >
      {children()}
    </div>
  </div >
)

Wrapper.propTypes = {
  children: PropTypes.func,
}

export default Wrapper
