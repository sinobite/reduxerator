# reduxerator
Generator for redux actions and reducers

```javascript 
const {reducer, actions} = reduxerator('demons', {
    ['0']: 'Azazaelo',
    ['1']: 'Woland',
    ['3']: 'Behemoth'
})


const store = createStore(combineReducers({
		demons: reducer
	}), initState)
```

