import { Routes } from './Routes'
import { withRouter } from 'react-router-dom'
import { push } from 'connected-react-router'

export const Redirects = {
  goToHome: () => push('/'),
  gotToSearch: () => push('/search')
}

export default withRouter(Routes)