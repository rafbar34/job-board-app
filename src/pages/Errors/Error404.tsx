import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error404 = () => {

  const error = useRouteError()
  return (
    <div>Error404</div>
  )
}
