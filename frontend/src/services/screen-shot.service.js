import { toJpeg } from 'html-to-image';

export const createJpegFromElement = async (element, width) => {
    const dataUrl = await toJpeg(element, { cacheBust: true, style: { width: '100%', margin: '0', outline: 'none' }, width, quality: 0.5 })
    return await uploadImg(dataUrl)
}




export function uploadImg(file) {
    // Dev - download a pic for testing purposes
    // const link = document.createElement("a");
    // link.href = file;
    // link.download = "test.png";
    // link.click();

    const CLOUD_NAME = 'dfj4zd14o'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData();
    formData.append('file', file)
    formData.append('upload_preset', 'kl5zc9qj');

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
