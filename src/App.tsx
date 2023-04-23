import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback, ToastContainer } from 'components'
import Router from './Router'

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => typeof window !== undefined && window.location.reload()}>
      <ToastContainer />
      <Router />
    </ErrorBoundary>
  )
}

export default App