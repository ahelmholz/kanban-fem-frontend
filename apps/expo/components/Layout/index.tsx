import React, { FC } from 'react'

import Header from 'app/components/Header'

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
