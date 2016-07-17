function isFetchingReducer(isFetching = false, action) {
  switch (action.type) {
  case 'REQUEST_EXERCISES_INIT':
    return true

  case 'REQUEST_EXERCISES_SUCCESS':
    return false

  default:
    return isFetching
  }
}

export default isFetchingReducer
