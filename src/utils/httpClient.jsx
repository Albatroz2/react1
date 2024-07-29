const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmE0NTY0NjM0ODRhYTM2YjVhODgxMWRhZDhmOGIwOSIsIm5iZiI6MTcyMjIyNTcyMC4zNzQ1NzUsInN1YiI6IjY1NDQ4ZmE5OWNjNjdiMDEzYTMwMWE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Za--dthkpDsiPkgl5UUKwJXUD1_ogZeZArotIt1v-o",
            "Content-Type": "application/json;charset=utf-8",
            },
    }).then((result) => result.json());
}
