import { createBrowserHistory } from 'history'

export const isDevelopment = () => (
  process.env.NODE_ENV === 'development'
)

export const history = createBrowserHistory()
export const refreshHistory = createBrowserHistory({ forceRefresh: true })