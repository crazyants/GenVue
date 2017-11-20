var token

// create a fetch request with url and props passed and return a promise with the data returned
// also add the auth header
function getFetchRequestPromise(url, fetchProps) {
    fetchProps = fetchProps || {}
    fetchProps.headers = fetchProps.headers || {}
    fetchProps.headers.Authorization = 'Bearer ' + token
    var p = new Promise((resolve, reject) => {
        window.fetch(url, fetchProps).then((response) => {
            return response.json()
        }).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error.message) // TODO sanitize error
        })
    })
    return p
}

// create a fetch request with url and props passed and return a promise with the response returned
// also add the auth header
function getNonDataFetchRequestPromise(url, fetchProps) {
    fetchProps = fetchProps || {}
    fetchProps.headers = fetchProps.headers || {}
    fetchProps.headers.Authorization = 'Bearer ' + token
    var p = new Promise((resolve, reject) => {
        window.fetch(url, fetchProps).then((response) => {
            if (response.ok) {
                resolve(response)
            } else {
                reject(response.statusText) // TODO sanitize error
            }
        }).catch((error) => {
            reject(error)
        })
    })
    return p
}

export default {
    getToken: function (email, password) {
        var fetchProps = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'grant_type=password&username=' + email + '&password=' + password + "&client_id=mvc" + "&client_secret=101564A5-E7FE-42CB-B10D-61EF6A8F3651"
        }
        var p = new Promise((resolve, reject) => {
            window.fetch('/api/connect/token', fetchProps).then((response) => {
                return response.json()
            }).then((data) => {
                if (data.error) {
                    reject(data.error_description)
                } else {
                    token = data.access_token
                    resolve()
                }
            }).catch((error) => {
                reject(error)
            })
        });
        return p;
    },
    getUser: function () {
        return getFetchRequestPromise('/api/userinfo');
    }
}
