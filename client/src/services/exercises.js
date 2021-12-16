import { api } from "./myFetch";

export function GetAll() {
    return api('exercises');
}

export function GetLog(handle) {
    return api('exercises/alllog/' + handle);
}

export function GetAllLog(handle) {
    return api('exercises/log/' + handle);
}

export function Get(exercise_id) {
    return api('exercises/' + exercise_id);
}

export function Log(exercise) {
    return api('exercises', exercise);
}

export function Update(exercise_id, exercise) {
    return { exercise_id, exercise };
}

export function Unlog(exercise_id) {
    return api('exercises/' + exercise_id, {}, 'DELETE');
}