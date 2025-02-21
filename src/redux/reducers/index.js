const initialState = {
  rock: [],
  pop: [],
  hipHop: [],
  loading: false,
  error: null,
  selectedSong: null,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MUSIC_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_MUSIC_SUCCESS":
      return {
        ...state,
        loading: false,
        [action.payload.genre]: action.payload.data.slice(0, 4),
      };
    case "FETCH_MUSIC_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "SET_SELECTED_SONG":
      return { ...state, selectedSong: action.payload };
    default:
      return state;
  }
};

export default musicReducer;
