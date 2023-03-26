import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="/assets/images/contact.png" alt="Contact"
              height="300px" width="300px" />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label forHtml="exampleForm" class="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleForm" placeholder="foulen ben foulen" />
              </div>
              <div className="mb-3">
                <label forHtml="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label forHtml="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Send Message</button>
            </form>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
