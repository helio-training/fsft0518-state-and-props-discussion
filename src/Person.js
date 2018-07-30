import React, { Fragment } from 'react'

export default ({ url, name }) => (
  <Fragment>
    <h1><a href={url}>{name}</a></h1>
  </Fragment>
)
