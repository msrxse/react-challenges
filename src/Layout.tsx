import React from 'react'
import Sidebar from './components/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <section className="header">Header</section>
      <section className="sidebar">
        <Sidebar />
      </section>
      <main className="content">{children}</main>
    </div>
  )
}

export default Layout
