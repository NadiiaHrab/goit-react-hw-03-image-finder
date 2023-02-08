import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatUR, tags }) {
    return (
        <>
            <li class="gallery-item">
                <img
                    src={webformatUR}
                    alt={tags} />
            </li>
        </>
)
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatUR: PropTypes.string.isRequired,
    // largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,

}