const putState = (payload, state) => {
    return Object.keys(payload).reduce((acc, key) => {
        acc[key] = payload[key]
    }, {...state})
}

const deleteState = (payload, state) => {
    const newState = {...state}

    if (Array.isArray(payload)) {
        payload.forEach((id) => {
            delete newState[id]
        })
    } else {
        delete newState[payload]
    }

    return newState
}

const createActions = (namespace) => {
    return {
        set: (payload) => ({
            type: namespace + '/set',
            payload
        }),
        put: (payload) => ({
            type: namespace + '/put',
            payload
        }),
        delete: (payload) => ({
            type: namespace + '/delete',
            payload
        })
    }
}

const createReducers = (namespace, defaultState) => (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case namespace + '/set': {
            return payload
        }

        case namespace + '/put': {
            return putState(payload, state)
        }

        case namespace + '/delete': {
            return deleteState(payload, state)
        }

        default:
            return state
    }
}

function reduxerator(namespace, defaultState) {
    const actions = createActions(namespace)
    const reducer = createReducers(namespace, defaultState)

    return {
        actions, reducer
    }
}

export default reduxerator
