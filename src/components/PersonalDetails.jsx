import React from 'react';
import "../stylesheets/personaldetails.css"


const PersonalDetails = React.forwardRef((props, ref) => {
    return (
      <div id="personal-details" ref={ref}>
        <div className="inner-personal-details">
          <div className="left">
            <h1 className="text-lg">Personal Details</h1>
            <div className="details">
              <h4 className="text-md">
                Email: <span>vikasdeshmukh63@gmail.com</span>
              </h4>
              <h4 className="text-md">
                Languages: <span>English & Hindi</span>
              </h4>
              <h4 className="text-md">
                Nationality: <span>Indian</span>
              </h4>
            </div>
          </div>
          <div className="right">
            <h4 className="text-2xl">
              I Am Full Stack <span>Developer</span> |{" "}
            </h4>
            <p className="text-md">
              I'm a full-stack developer with a passion for creating beautiful,
              seamless web applications that work like a dream. With a strong eye
              for design and a deep understanding of both front-end and back-end
              development, I approach every project with enthusiasm and a
              commitment to excellence. I'm a problem-solver, a collaborator, and
              a perpetual learner who's always on the lookout for new ways to
              innovate and create. If you're looking for a full-stack developer
              who's creative, driven, and ready to bring your vision to life, look
              no further.
            </p>
          </div>
        </div>
      </div>
    );
  });
  


export default PersonalDetails
