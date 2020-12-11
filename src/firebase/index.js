import { createContext } from 'react'
import FirebaseApp from 'firebase/app'
import 'firebase/firestore'

import { firebaseConfig } from './config'

class Firebase {
    constructor() {
        // Check if firebase instance is already running
        if (!FirebaseApp.apps.length) {
            // If not we initialize firebase
            FirebaseApp.initializeApp(firebaseConfig)
            // Set up connection to firestore database
            FirebaseApp.firestore()
                // Persistence allows the database to be available offline.
                // When the app comes online data is automatically syncronized.
                .enablePersistence({ synchronizeTabs: true })
                .catch(err => console.log(err))
        }

        // instance variables
        // These variables allow easy access points into our database
        this.db = FirebaseApp.firestore()
        this.ideasCollection = this.db.collection('ideas')
    }
}

// Create a context with an initial value of null
const FirebaseContext = createContext(null)

export { Firebase, FirebaseContext, FirebaseApp }