import { createBrowserHistory } from 'history'

export const isDevelopment = () => (
  process.env.NODE_ENV === 'development'
)

export const history = createBrowserHistory()
export const refreshHistory = createBrowserHistory({ forceRefresh: true })

const targetTerm = (term) => ( term ? term : '')
const numberOfItems = (items) => ( items ? items.data.length : '')

export const handleSearchInfo = (items, term) => ( { length: numberOfItems(items), term: targetTerm(term) } )

const relevanceOption = {
  name: 'Sort by: Relevance',
  value: 'relevance'
}

export const sortOptions = {
  default: relevanceOption,
  extra: [
    relevanceOption,
    {
      name: 'Newest',
      value: 'newest'
    },
    {
      name: 'Lowest Price',
      value: 'lowest'
    },
    {
      name: 'Highest Price',
      value: 'highest'
    }
  ]
}

export const priceOptions = [
  {
    id: '1',
    label: '$50',
    checked: false
  },
  {
    id: '2',
    label: '$50 to $200',
    checked: false
  },
  {
    id: '3',
    label: '$200',
    checked: false
  }
]