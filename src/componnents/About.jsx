import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Sunt aut iusto ipsam atque autem,
              dolore maiores aliquid ab,
              aspernatur dolores animi excepturi.
              Quibusdam inventore quisquam sunt
              exercitationem nostrum blanditiis,
              tempora voluptates, explicabo illo earum dolor dolorem. Libero consequuntur,
              deleniti, sunt nisi eius mollitia beatae illum asperiores itaque minima aliquid voluptatibus
              deserunt reiciendis sed. Voluptatem repellat maxime esse reprehenderit animi corrupti eaque, nisi ut ratione, soluta exercitationem voluptas. Sunt, dicta placeat sapiente iure molestiae fuga non, consectetur, dolor iste laudantium distinctio natus numquam cupiditate? Reiciendis quasi temporibus molestiae quibusdam numquam maiores exercitationem? Omnis aliquam autem molestias fugiat voluptates nulla deleniti
              ducimus!
            </p>
            <NavLink to="/contact" className="btn btn-primary px-3"> Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.png" alt="About Us" height="400 px" width="400px" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
