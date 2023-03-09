import { createEvent, createStore } from "effector";

export const setSearch = createEvent();

export const $searchTerm = createStore("");
$searchTerm.on(setSearch, (_, value) => value?.trim());
