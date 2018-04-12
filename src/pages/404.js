import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <section>
    <h1>Oops! 😳</h1>
    <p>
      I can't find this page. Double-check the URL, and if you think you've
      found a broken link, <Link to="/contact/">let me know.</Link>
    </p>
  </section>
)

export default NotFoundPage
