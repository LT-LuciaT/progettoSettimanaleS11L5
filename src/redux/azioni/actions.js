export const fetchMusicRequest = () => ({ type: "FETCH_MUSIC_REQUEST" });
export const fetchMusicSuccess = (data, genre) => ({
  type: "FETCH_MUSIC_SUCCESS",
  payload: { data, genre },
});
export const fetchMusicFailure = (error) => ({
  type: "FETCH_MUSIC_FAILURE",
  payload: error,
});

export const setSelectedSong = (song) => ({
  type: "SET_SELECTED_SONG",
  payload: song,
});

export const fetchMusic = (artistName, genre) => {
  return async (dispatch) => {
    dispatch(fetchMusicRequest());
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(fetchMusicSuccess(data.data, genre));
    } catch (error) {
      dispatch(fetchMusicFailure(error.message));
    }
  };
};

export const searchMusic = (query) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_MUSIC_REQUEST" });
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const firstFourResults = data.data.slice(0, 4);
      console.log("Primi 4 risultati:", firstFourResults);
      dispatch({ type: "SEARCH_MUSIC_SUCCESS", payload: firstFourResults });
    } catch (error) {
      console.error("Errore durante la ricerca:", error);
      dispatch({ type: "FETCH_MUSIC_FAILURE", payload: error.message });
    }
  };
};
