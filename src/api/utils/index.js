import axios from "axios";

export const imageUpload = async photo => {
       // image upload korar binary code a convert korte hobe image k maybe.
       const formData = new FormData();
       console.log(photo);
       formData.append('image', photo)

       // image upload korbo
       const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`, formData)
       console.log(data.data.display_url)
       return data?.data?.display_url;
}