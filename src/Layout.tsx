import React from 'react'

const Sidebar = () => (
  <ul>
    <li>
      <a href="/product-filter-two">ProductFilter2</a>
    </li>
    <li>
      <a href="/product-filter">ProductFilter</a>
    </li>
    <li>
      <a href="/counter">Counter</a>
    </li>
    <li>
      <a href="/data-grid">Datagrid</a>
    </li>
    <li>
      <a href="/expandable_faq">ExpandableFAQ</a>
    </li>
    <li>
      <a href="/task-tracker">TaskTracker</a>
    </li>
    <li>
      <a href="/form-validations-2">FormValidations</a>
    </li>
    <li>
      <a href="/countdown-timer">CountDownTimer</a>
    </li>
    <li>
      <a href="/fetch-custom-hook">FetchCUstomHook</a>
    </li>
    <li>
      <a href="/post-provider">PostProvider</a>
    </li>
    <li>
      <a href="/dynamic-form">DynamicForm</a>
    </li>
    <li>
      <a href="/form-validations">FormValidations</a>
    </li>
    <li>
      <a href="/virtualized-list">VirtualizedList</a>
    </li>
    <li>
      <a href="/multi-step-form">MultiStepForm</a>
    </li>
    <li>
      <a href="/star-rating">StarRating</a>
    </li>
    <li>
      <a href="/toggle">Toggle</a>
    </li>
    <li>
      <a href="/todo-list">TodoList</a>
    </li>
    <li>
      <a href="/fetch-data">FetchData</a>
    </li>
    <li>
      <a href="/search-data">SearchData</a>
    </li>
    <li>
      <a href="/dropdown-menu">DropdownMenu</a>
    </li>
    <li>
      <a href="/tabs">Tabs</a>
    </li>
    <li>
      <a href="/modal">Modal</a>
    </li>
    <li>
      <a href="/portal">Portal</a>
    </li>
    <li>
      <a href="/carousel">Carousel</a>
    </li>
    <li>
      <a href="/theme-context">ThemeContext</a>
    </li>
  </ul>
)
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
