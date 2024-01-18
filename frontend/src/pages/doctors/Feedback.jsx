import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { formatDate } from '../../utils/formatData';
import avatar from './../../assets/images/avatar-icon.png';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (727)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="h-10 w-10 rounded-full">
              <img src={avatar} alt="avatar" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-irisBlueColor font-bold">
                Will Smith
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formatDate('02-14-2023')}
              </p>
              <p className="text-para mt-3 font-medium text-[15px]">
                Good service, highly recommended 👍
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
