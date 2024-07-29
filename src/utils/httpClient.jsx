const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer,"
            },
    }).then((result) => result.json());
}
