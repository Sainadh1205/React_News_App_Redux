import Api from "../../components/Assets/Api";
import axios from "axios";

export const FETCHNEWS_REQUEST = "FETCHNEWS_REQUEST";
export const FETCHNEWS_SUCCESS = "FETCHNEWS_SUCCESS";
export const FETCHNEWS_FAILURE = "FETCHNEWS_FAILURE";

export const fetchNewsRequest = () => ({
  type: FETCHNEWS_REQUEST,
});

export const fetchNewsSuccess = (newsList) => ({
  type: FETCHNEWS_SUCCESS,
  payload: newsList,
});

export const fetchNewsFailure = (errorMsg) => ({
  type: FETCHNEWS_FAILURE,
  payload: errorMsg,
});

export const fetchNews = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchNewsRequest());
      setTimeout(() => {
        dispatch(fetchNewsSuccess(Api))
      }, 2000);

      // const res = await axios.get(
      //   "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7561b0dd655e4f529c9f4e64db980e70"
      // );
      
      // dispatch(fetchNewsSuccess(res.data.articles));
    } catch (err) {
      dispatch(fetchNewsFailure(err.message));
    }
  };
};
