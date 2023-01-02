import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const [, loading] = useAuthState(auth);

  const { isLoading, data } = useQuery(['reviews'], () =>
    fetch('http://localhost:5000/review').then((res) => res.json())
  );

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto bg-base-300 p-5 mt-10">
      <h1 className="text-5xl text-center mt-16">Review</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-14 gap-5">
        {data.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
