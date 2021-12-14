import { api } from "./myFetch";

export function GetAll() {
    return api('exercises');
}

export function GetWall(handle) {
    return api('exercises/wall/' + handle);
}

export function GetFeed(handle) {
    return api('exercises/feed/' + handle);
}

export function Get(exercise_id) { 
    return api('exercises/' + exercise_id); 
}

export function Add(exercise) {
    return api('exercises', exercise);
}
export function Update(exercise_id, exercise) {
    return { exercise_id, exercise };
}
export function Delete(exercise_id) {
    return api('exercises/' + exercise_id, {}, 'DELETE');
}