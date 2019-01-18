from firebase import firebase
firebase = firebase.FirebaseApplication('https://menu-parser-7ba02.firebaseio.com/')
firebase.post('/food', ['test', 'test'])
