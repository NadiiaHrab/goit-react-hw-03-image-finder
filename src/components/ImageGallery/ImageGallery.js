import PropTypes from 'prop-types';
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

export default function ImageGallery({ images }) {
    return (
        <>
            <ul className={css.imageGallery}>
                {images.map(({ id, webformatURL, tags }) => (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        tags={tags}

                    />
                ))}

            </ul>
        </>
)
}

ImageGallery.propTypes = {
    hits: PropTypes.arrayOf(
     PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatUR: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    })
)}
