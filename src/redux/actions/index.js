import {readRemindersSaga}  from "./reminderSaga";
import { READ_REMINDERS } from "../ActionTypes";
import { takeLatest } from "@redux-saga/core/effects";


export function* watcherSaga(){
    yield takeLatest(READ_REMINDERS, readRemindersSaga);
}