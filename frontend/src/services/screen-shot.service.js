export function uploadImg(file) {
    const CLOUD_NAME = 'dfj4zd14o'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData();
    formData.append('file', file)
    formData.append('upload_preset', 'kl5zc9qj');

    console.log(formData)

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {
            return res.url
        })
        .catch(err => console.error(err))
}
