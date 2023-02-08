import PropTypes from 'prop-types';
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

export default function ImageGallery({ hits }) {
    return (
        <>
            <ul className={css.imageGallery}>
                {hits.map(({ id, webformatUR, tags }) => (
                    <ImageGalleryItem
                        key={id}
                        webformatUR={webformatUR}
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