export const fetchData = (data) => {
    return new Promise((resolve, reject) => {
        if (data.length > 0) {
            setTimeout(() => {
                resolve(data)
            }, 3000);
        } else {
            reject(new Error("There is no data"))
        }
    })
}