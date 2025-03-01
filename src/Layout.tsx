import React from 'react'
import Sidebar from './components/Sidebar'

interface Components {
  [key: string]: ({ ...props }) => React.ReactElement
}

const Layout = ({
  components,
  children,
}: {
  components: Components
  children: React.ReactNode
}) => {
  return (
    <div className="layout">
      <section className="header">Header</section>
      <section className="sidebar">
        <Sidebar components={components} />
      </section>
      <main className="content">{children}</main>
    </div>
  )
}

export default Layout
