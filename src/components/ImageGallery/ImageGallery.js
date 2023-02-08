import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem";

export default function ImageGallery({ hits }) {
    return (
        <>
            <ul class="gallery">
                {hits.map(({ id, webformatUR, largeImageURL, tags }) => (
                    <ImageGalleryItem
                        id={id}
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