import axios from 'axios'

const Get = function (url:string, params:any) {
    return new Promise((resolve) => {
        axios
            .get(url, { params })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                resolve(null)
                console.error(err)
            })
    })
}
const Post = function (url: string, params: any) {
    return new Promise((resolve) => {
        axios
            .post(url, { params })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                resolve(null)
                console.error(err)
            })
    })
}
export {
    Get,
    Post
}