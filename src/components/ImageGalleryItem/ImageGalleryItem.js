import PropTypes from 'prop-types';

export default function ImageGalleryItem({ id,
    webformatUR,
    largeImageURL,
    tags }) {
    return (
        <>
            <li class="gallery-item" key={id}>
                <img src={webformatUR} alt={tags} />
            </li>
        </>
)
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatUR: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,

}