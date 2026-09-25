import React from 'react';

const Hero = () => {
    return (
        <section className="py-12 text-center">

          <h1 className="text-2xl sm:text-3xl font-bold text-base-content">
            Friends to keep close in your life
          </h1>

          <p className="mx-auto mt-2 max-w-md text-sm sm:text-base leading-5 text-base-content/50">
            Your personal space for meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="btn btn-primary mt-5">
            + Add a Friend
          </button>

        </section>
    );
};

export default Hero;