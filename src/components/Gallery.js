import React, { Component } from 'react';
import book from '../images/book.svg';
import './Gallery.css';
import StarRatings from 'react-star-ratings';
import ShowMore from 'react-show-more';

// TODO: Can this component be functional instead?
class Gallery extends Component {

    render() {
        return (
            <div className="thumbnailWrapper">{
                this.props.items.map((item, index) => {
                    let { title, imageLinks, authors, description, ratingsCount, averageRating } = item.volumeInfo;
                    return (
                        <div key={item.id} className="thumbnail">

                            <div>
                                <img
                                    src={undefined !== imageLinks ? imageLinks.thumbnail : { book }}
                                    alt={`Pictured: The cover for the book ${title}.`}
                                    className="bookCover"
                                    />
                            </div>
                            <div className="descriptionSection">
                                <div className="bookTitle">
                                    {title}
                                </div>
                                <div>{'by ' + authors}</div>
                                <div className="ratingDesc">
                                    <div><StarRatings
                                        rating={averageRating}
                                        starRatedColor="orange"
                                        numberOfStars={5}
                                        starDimension="15px"
                                        starSpacing="2px"
                                        name='rating'
                                        />&nbsp;{averageRating}</div>
                                    <div style={{ 'paddingLeft': '10px', 'color': 'green' }}>{ratingsCount ? ratingsCount : 'N/A' + ' Ratings'}</div>
                                    <div style={{ 'paddingLeft': '10px', 'color': 'green' }}>{'N/A Reviews'}</div>
                                </div>
                                <div><ShowMore
                                    lines={5}
                                    more='...more'
                                    less='...less'
                                    anchorClass=''
                                    >
                                    {(description && description.length>500) ? description.substring(0, 250) : description}
                                </ShowMore></div>
                            </div>
                        </div>
                    )
                })
            }</div>
        )
    }
}

export default Gallery;
