const ShowReducer = (shows =[], action) => {
    switch(action.type) {
        case 'GET_SHOWS':
            return shows
        case 'ADD_SHOW':
            return [...shows, action.payload]
        case 'DEL_SHOW': {
            const anyShows = [...shows]
            if (action.payload !== -1) {
                anyShows.splice(action.payload, 1)
            }
            return anyShows
        }
        default:
            return shows
    }
}

export default ShowReducer