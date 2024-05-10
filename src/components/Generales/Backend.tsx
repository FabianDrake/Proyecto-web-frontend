const url_backend = "http://localhost:3010/api/v1/";
export const getDatos = (url) => {
    const new_url = url_backend + url;
    return new Promise<T>((resolve, reject) => {
        fetch(new_url)
            .then((response) => {
                if (!response.ok) {
                    reject("Hubo un problema al realizar la solicitud.");
                }
                return response.json() as Promise<T>;
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                console.error("Error:", error);
                reject(error);
            });
    });

}
export function postDatos<T>(url: string, data: any): Promise<T> {
    const new_url = url_backend + url;
    return new Promise<T>((resolve, reject) => {
        fetch(new_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                return response.json() as Promise<T>;
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                console.error("Error:", error);
                reject(error);
            });
    });
}