import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../../Shared/Loading/Loading';
import SingleReviewDetails from './SingleReviewDetails';

const ShowReview = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/review')
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-4/5 mx-auto  my-20'>
            <h2>YThis is review {reviews.length}</h2>
            <div class="holder grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 mt-16">

                {
                    reviews.map(SingleReview => <SingleReviewDetails
                        key={SingleReview._id}
                        SingleReview={SingleReview}
                    ></SingleReviewDetails>)
                }




            </div>





        </div>
    );
};

export default ShowReview;