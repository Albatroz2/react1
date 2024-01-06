const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmE0NTY0NjM0ODRhYTM2YjVhODgxMWRhZDhmOGIwOSIsInN1YiI6IjY1NDQ4ZmE5OWNjNjdiMDEzYTMwMWE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0q9Y6XuD9NMxbnsPgZYRxqL7646YItX2geYVsbfHDY",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}