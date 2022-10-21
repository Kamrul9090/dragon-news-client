import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCart = ({ news }) => {
    console.log(news);
    const { _id, author, img, name, rating, published_date, details, total_view, image_url, title } = news;
    return (
        <div>
            <Card className='mb-5'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image className='me-2'
                            roundedCircle
                            src={author.img} style={{ height: '60px' }}
                        ></Image>
                        <div className='fw-bold'>
                            <p className='mb-0'>{author?.name}</p>
                            <p className='mb-0'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'}
                                    <Link to={`/news/${_id}`}>Read More</Link>
                                </p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye>
                        <span className=''>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCart;