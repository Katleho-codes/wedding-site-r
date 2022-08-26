import React from "react";

const Contact = () => {
  return (
    <>
      <main class="container contact my-5">
        <section class="text-center dark-grey-text mb-5">
          <div class="card">
            <div class="card-body rounded-top border-top p-5">
              <h3 class="font-weight-bold my-4">Contact Us</h3>

              <p class="font-weight-light mx-auto mb-4 pb-2">
                Please keep enquiries short as possible
              </p>

              <form class="mb-4 mx-md-5" action="">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    {/* <!-- Name --> */}
                    <input
                      type="text"
                      id="name"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-md-6 mb-4">
                    {/* <!-- Email --> */}
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 mb-4">
                    {/* Subject */}
                    <input
                      type="text"
                      id="subject"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group mb-4">
                      <textarea
                        class="rounded"
                        id="message"
                        rows="3"
                        placeholder="How can we help?"
                      ></textarea>
                    </div>

                    <div class="text-center">
                      <button
                        type="submit"
                        class="btn submit-btn btn-info btn-md"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
