import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'

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
    <div className="layout_main">
      <section className="layout_header">{title}</section>
      <section className="layout_sidebar">
        <Sidebar components={components} />
      </section>
      <main className="layout_content">{children}</main>
    </div>
  )
}

export default Layout
