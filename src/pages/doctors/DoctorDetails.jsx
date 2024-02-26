/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../config';

import useFetchData from '../../hooks/useFetchData';
import Loading from '../../components/loader/Loading';
import Error from '../../components/error/Error';

import starIcon from './../../assets/images/Star.png';

import Feedback from './Feedback';
import DoctorAbout from './DoctorAbout';
import SidePanel from './SidePanel';
import { Helmet } from 'react-helmet-async';

const DoctorDetails = () => {
  const [tab, setTab] = useState('about');
  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctor/${id}`);
  console.log(doctor);

  const {
    name,
    bio,
    specialization,
    photo,
    averageRating,
    totalRating,
    reviews,
    qualifications,
    experiences,
    about,
    gender,
    ticketPrice,
    timeSlots,
  } = doctor;
  return (
    <>
      <Helmet>
        <title>Medicare - Doctor Details</title>
        <meta name="description" content="This is the doctor details page." />
      </Helmet>
      <section>
        <div className="max-w-[1170px] px-5 mx-auto">
          {loading && <Loading />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid md:grid-cols-3 gap-[50px]">
              <div className="md:col-span-2">
                <div className="flex items-center gap-5">
                  <figure className="max-w-[200px] max-h-[200px]">
                    <img src={photo} alt="doctorImg" className=" w-full" />
                  </figure>

                  <div className="">
                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                      {specialization?.toUpperCase()}
                    </span>
                    <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                      {name}
                    </h3>
                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                        <img src={starIcon} alt="starIcon" /> {averageRating}
                      </span>
                      <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                        ({totalRating})
                      </span>
                    </div>
                    <p className="text-para text-[14px] leading-6 md:text-[15px] lg:min-w-[390px]">
                      {bio}
                    </p>
                  </div>
                </div>

                <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                  <button
                    onClick={() => setTab('about')}
                    className={`${
                      tab === 'about' &&
                      'border-b border-solid border-primaryColor'
                    } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                  >
                    About
                  </button>

                  <button
                    onClick={() => setTab('feedback')}
                    className={`${
                      tab === 'feedback' &&
                      'border-b border-solid border-primaryColor'
                    } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                  >
                    Feedback
                  </button>
                </div>

                <div className="mt-[50px]">
                  {tab === 'about' && (
                    <DoctorAbout
                      name={name}
                      about={about}
                      qualifications={qualifications}
                      experiences={experiences}
                    />
                  )}
                  {tab === 'feedback' && (
                    <Feedback reviews={reviews} totalRating={totalRating} />
                  )}
                </div>
              </div>

              <div>
                <SidePanel
                  doctorId={doctor._id}
                  ticketPrice={ticketPrice}
                  timeSlots={timeSlots}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DoctorDetails;
