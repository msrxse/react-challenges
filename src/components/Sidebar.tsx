const components = [
  ['/counter', 'Counter'],
  ['/toggle-switch', 'ToggleSwitch'],
  ['/todo-list', 'TodoList'],
  ['/fetch-data', 'FetchData'],
  ['/searchbar', 'SearchBar'],
  ['/dropdown-menu', 'DropdownMenu'],
  ['/tabs', 'Tabs'],
  ['/modal', 'Modal'],
  ['/portal', 'Portal'],
  ['/carousel', 'Carousel'],
  ['/theme-context', 'ThemeContext'],
  ['/star-rating', 'StarRating'],
  ['/multi-step-form', 'MultiStepForm'],
  ['/virtualized-list', 'VirtualizedList'],
  ['/form-validations', 'FormValidations'],
  ['/dynamic-form', 'DynamicForm'],
  ['/post-provider', 'PostProvider'],
  ['/fetchCustomHook', 'FetchCustomHook'],
  ['/countdown-timer', 'CountdownTimer'],
  ['/form-validations-2', 'FormValidations2'],
  ['/task-tracker', 'TaskTracker'],
  ['/expandable-faq,', 'ExpandableFAQ'],
  ['/data-grid', 'DataGrid'],
  ['/product-filter', 'ProductFilter'],
  ['/product-filter-2', 'ProductFilter2'],
  ['/image-carousel', 'ImageCarousel'],
]

function Sidebar() {
  return (
    <div>
      <ul>
        {components.map((each) => (
          <li key={each[0]}>
            <a href={each[0]}>{each[1]}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
