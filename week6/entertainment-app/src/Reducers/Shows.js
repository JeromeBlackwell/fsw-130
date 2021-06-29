const ShowReducer = (shows =[], action) => {
    switch(action.type) {
        case 'GET_SHOWS':
            return shows
            break
        case 'ADD_SHOW':
            return [...shows, action.payload]
            break
        case 'DEL_SHOW': {
            const aryShows = [...shows]
            if (action.payload !== -1) {
                aryShows.splice(action.payload, 1)
            }
            return aryShows
            break
        }
        default:
            return shows
            break
    }
}

export default ShowReducer