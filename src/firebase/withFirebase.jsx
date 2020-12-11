import React from 'react'
import { FirebaseContext } from '.'

// Higher order component that passes our firebase instance as a prop to any component within the app.

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)