import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects"; 
import {setUserProfile} from '../actions'

const urlData = "http://api.myjson.com/bins/17eyds"

//watcher saga
export function* watchFetchUserProfile() {
    yield takeEvery("FETCH_USER_PROFILE", fetchUserProfile);
}

//worker saga 
function* fetchUserProfile() {
    const {data} = yield call(axios.get, urlData);
    yield put(setUserProfile(data));
}