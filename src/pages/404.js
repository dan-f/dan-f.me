import React from 'react'

import Link from '../components/Link'

const NotFoundPage = () => (
  <div>
    <h1>Oops! 😳</h1>
    <p>
      I can't find this page. Double-check the URL, and if you think you've
      found a broken link, <Link to="/contact/">let me know.</Link>
    </p>
  </div>
)

export default NotFoundPage
