

const Marketting = () => {
  return (
    <>
      <section>
        <div className=" mt-2 p-5 bg-white px-2 lg:flex lg:flex-row lg:items-center">
          <div className="w-full bg-white lg:w-1/2 mt-10 mx-5">
            <div className="my-10 mt-5 mb-5 lg:my-0 lg:px-10">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Social Media Marketing
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                We As a Social Media Marketing Agency in Nepal, Provides
                Businesses With Highly Visual Reports in Any Format to
                Demonstrate Their Impact on Social Media.
              </p>
              <div className=" mt-3 mb-5 p-8 flex flex-col gap-2">
                <ol className="steps">
                  <li className="step">
                    <div className="step-circle outline-none bg-yellow-500 text-center text-black ">1</div>
                    <h3 className="text-black font-serif ">Social Media Analysis & Content Performance Reporting</h3>
                  </li>
                  
                </ol>

                <ol className="steps">
                  <li className="step">
                    <div className="step-circle outline-none bg-yellow-500 text-center text-black">2</div>
                    <h3 className="text-black font-serif">Demonstrate Social Audience Growth and User Interactions</h3>
                  </li>
                 
                </ol>

                <ol className="steps">
                  <li className="step">
                    <div className="step-circle outline-none bg-yellow-500 text-center text-black">3</div>
                    <h3 className="text-black font-serif">Customize & Export Unlimited Presentation-Ready Reports</h3>
                  </li>
                 
                </ol>

                <ol className="steps">
                  <li className="step">
                    <div className="step-circle outline-none bg-yellow-500 text-center text-black">4</div>
                    <h3 className="text-black font-serif">Analyze Social Media Metrics and Uncover Trends</h3>
                  </li>
                 
                </ol>

                <ol className="steps">
                  <li className="step">
                    <div className="step-circle outline-none bg-yellow-500 text-center text-black">5</div>
                    <h3 className="text-black font-serif">Compare Social Media Performance Against Competitors</h3>
                  </li>
                 
                </ol>
				<ol className="steps">
                  <li className="step">
                    <div className="step-circle outline-none bg-yellow-500 text-center text-black">6</div>
                    <h3 className="text-black font-serif">Tracking Parameters Usages for Social Media Campaign Analysis</h3>
                  </li>
                 
                </ol>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://www.tdm.com.np/wp-content/uploads/2017/07/social-media-analysis-small.png"
              className ="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketting;
