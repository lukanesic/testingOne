import React, { useState } from 'react'
import Footer from '../container/Footer'
import Nav from '../container/Nav'
import Credits from '../ui/Credits'

const MainLayout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  return (
    <div className='main'>
      <Nav
        open={openMenu}
        setOpen={setOpenMenu}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />
      {children}
      <Footer />
      <Credits />
    </div>
  )
}

export default MainLayout
