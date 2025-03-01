import React from 'react'
import Sidebar from './components/Sidebar'

interface Components {
  [key: string]: ({ ...props }) => React.ReactElement
}

const Layout = ({
  title,
  components,
  children,
}: {
  title: string
  components: Components
  children: React.ReactNode
}) => {
  return (
    <div className="layout">
      <section className="header">{title}</section>
      <section className="sidebar">
        <Sidebar components={components} />
      </section>
      <main className="content">{children}</main>
    </div>
  )
}

export default Layout
