import Photo from "../model/CardPhoto.js";
import Video from "../model/CardVideo.js";

export default function hydratePhotoFactory(media, name) {
    
    if (media.image) {
        return new Photo(media, name)
    } else if (media.video) {
        return new Video(media, name)
    }

}