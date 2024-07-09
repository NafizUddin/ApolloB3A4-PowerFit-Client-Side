import happyCustomer from "../assets/happyCustomer.png";
import { AiFillCheckCircle } from "react-icons/ai";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import { FiTarget } from "react-icons/fi";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import teamInfo from "../jsons/teamInfo.json";

const AboutUs = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Heading Part */}
      <div className="flex flex-col lg:flex-row gap-8 md:my-16 md:mx-8 items-center my-14">
        <div className="flex-1">
          <h1 className="text-[#e08534] text-xl pb-3 text-center md:text-left -mt-6 md:-mt-0 font-semibold">
            About PowerFit
          </h1>
          <h1 className="text-[#033955] font-bold text-3xl md:text-4xl pb-5 text-center md:text-left">
            Your Partner in Fitness Excellence Since 2018
          </h1>
          <p className="text-left text-gray-500 mx-5 md:mx-0">
            Welcome to <span className="text-[#e08534]">PowerFit</span>, your
            ultimate destination for premium fitness accessories and equipment!
            Since 2018, we’ve been empowering fitness enthusiasts to achieve
            their goals with top-quality products. From resistance bands to
            weightlifting gear, yoga mats to exercise machines, we specialize in
            providing the tools you need to enhance your workouts and
            performance. Our commitment to excellence ensures every product
            meets the highest standards of durability and effectiveness. Choose{" "}
            <span className="text-[#e08534]">PowerFit</span> for a fitness
            journey that's not just a routine but a lifestyle transformation.
            Here’s to achieving greatness together!
          </p>
          <div className="my-6 flex flex-col md:flex-row gap-10 justify-around">
            <div className="flex flex-col items-center justify-center py-5 px-7 space-y-4">
              <img src={happyCustomer} className="w-16" />
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="flex gap-1 items-center">
                  <h1 className="text-4xl font-bold">
                    {counterOn && (
                      <CountUp start={1} end={200} duration={2} delay={0.3} />
                    )}
                  </h1>
                  <h1 className="text-4xl font-bold">K+</h1>
                </div>
              </ScrollTrigger>

              <p className="text-lg">Happy Customers</p>
            </div>
            <div className="flex flex-col pl-6 md:pl-0 space-y-3 lg:space-y-1 xl:space-y-3">
              <div className="flex gap-4 items-center lg:items-start xl:items-center">
                <div className="text-xl text-[#e08534] lg:mt-1 xl:mt-0">
                  <AiFillCheckCircle></AiFillCheckCircle>
                </div>
                <p className="text-lg text-[#033955] font-semibold">
                  Premium Fitness Products
                </p>
              </div>
              <div className="flex gap-4 items-center lg:items-start xl:items-center">
                <div className="text-xl text-[#e08534] lg:mt-1 xl:mt-0">
                  <AiFillCheckCircle></AiFillCheckCircle>
                </div>
                <p className="text-lg text-[#033955] font-semibold">
                  100% Satisfaction Guarantee
                </p>
              </div>
              <div className="flex gap-4 items-center lg:items-start xl:items-center">
                <div className="text-xl text-[#e08534] lg:mt-1 xl:mt-0">
                  <AiFillCheckCircle></AiFillCheckCircle>
                </div>
                <p className="text-lg text-[#033955] font-semibold">
                  Rigorous Quality Control
                </p>
              </div>
              <div className="flex gap-4 items-center lg:items-start xl:items-center">
                <div className="text-lg text-[#e08534] lg:mt-1 xl:mt-0">
                  <AiFillCheckCircle></AiFillCheckCircle>
                </div>
                <p className="text-lg text-[#033955] font-semibold">
                  Customer-Centric Approach
                </p>
              </div>
              <div className="flex gap-4 items-center lg:items-start xl:items-center">
                <div className="text-xl text-[#e08534] lg:mt-1 xl:mt-0">
                  <AiFillCheckCircle></AiFillCheckCircle>
                </div>
                <p className="text-lg text-[#033955] font-semibold">
                  Expert Support Team
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-8 lg:mb-0 relative lg:w-full h-[300px] lg:h-[650px] xl:h-[540px] mx-5 md:mx-0">
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative bg-gray-900 bg-opacity-70 h-full">
              <h1
                className="text-white font-bold text-center text-2xl  md:text-4xl lg:text-3xl xl:text-4xl py-28 md:py-28 lg:py-44 xl:py-52 px-2
               md:px-20 lg:px-7"
              >
                Dream. Train. Achieve: Where Fitness Goals Come to Life!
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* About Company ends */}
      {/* Why Choose Us starts */}
      <div className="flex flex-col-reverse lg:flex-row gap-8 md:px-8 items-center">
        <div className="flex-1">
          <div className="mb-8 lg:mb-0 relative lg:w-full h-[300px] lg:h-[640px] xl:h-[470px] mx-5 md:mx-0">
            <img
              src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative bg-gray-900 bg-opacity-70 h-full">
              <h1
                className="text-white font-bold text-center text-2xl  md:text-4xl lg:text-3xl xl:text-4xl py-28 md:py-28 lg:py-44 xl:py-52 px-2
               md:px-20 lg:px-7"
              >
                From Vision to Vitality: Where Every Workout Matters!
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-[#e08534] text-xl pb-2 text-center md:text-left pt-4 font-semibold">
            Our Mission & Vision
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl pb-5 text-center md:text-left">
            Empowering Fitness with Innovative, Reliable Equipment
          </h1>
          <p className="text-left text-gray-500 mx-5 md:mx-0">
            Choose <span className="text-[#e08534]">PowerFit</span> as your
            go-to source for premium fitness accessories and equipment, ensuring
            a seamless and transformative fitness experience. With a dedicated
            team of experts, we bring your fitness goals to life through
            innovative products, exceptional quality, and unwavering support.
            Our customer-centric approach guarantees your satisfaction, making
            every workout with us a step towards success. Let's achieve
            greatness together. Contact{" "}
            <span className="text-[#e08534]">PowerFit</span> today and elevate
            your fitness journey.
          </p>
          <div className="flex items-center justify-between gap-4 my-5">
            <div>
              <div className="flex flex-col pl-6 md:pl-0 space-y-3 lg:space-y-1 xl:space-y-3">
                <div className="flex gap-4 items-start md:items-center lg:items-start xl:items-center">
                  <div className="text-xl text-[#e08534] mt-1 md:mt-0 lg:mt-1 xl:mt-0">
                    <FiTarget />
                  </div>
                  <p className="text-lg text-[#033955] font-semibold">
                    Empower fitness enthusiasts with premium accessories.
                  </p>
                </div>
                <div className="flex gap-4 items-start md:items-center lg:items-start xl:items-center">
                  <div className="text-xl text-[#e08534] mt-1 md:mt-0 lg:mt-1 xl:mt-0">
                    <FiTarget />
                  </div>
                  <p className="text-lg text-[#033955] font-semibold">
                    Enhance workout experiences with innovative gear.
                  </p>
                </div>
                <div className="flex gap-4 items-start md:items-center lg:items-start xl:items-center">
                  <div className="text-xl text-[#e08534] mt-1 md:mt-0 lg:mt-1 xl:mt-0">
                    <FiTarget />
                  </div>
                  <p className="text-lg text-[#033955] font-semibold">
                    Lead global fitness innovation setting new industry
                    standards.
                  </p>
                </div>
                <div className="flex gap-4 items-start md:items-center lg:items-start xl:items-center">
                  <div className="text-xl text-[#e08534] mt-1 md:mt-0 lg:mt-1 xl:mt-0">
                    <FiTarget />
                  </div>
                  <p className="text-lg text-[#033955] font-semibold">
                    Inspire healthier lifestyles worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us ends */}
      {/* Meet Our Team starts*/}
      <div className="my-12">
        <SectionTitle
          sub="Our Team"
          heading="Meet Our Expert Team"
          description="Here is our dedicated team committed to enhancing your fitness journey with unparalleled expertise and support."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all my-7 md:mx-8 xl:mx-0">
          {teamInfo.map((member, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img
                src={member.image}
                alt=""
                className="w-full h-[450px] transition duration-300 hover:grayscale object-fill group-hover:scale-110"
              />
              <div className="bg-white absolute bottom-12 w-80 space-y-1 flex flex-col py-3 px-5">
                <span className="text-3xl group-hover:text-[#e08534] text-[#033955]">
                  {member.name}
                </span>
                <span className="group-hover:text-gray-500 font-medium text-[#e08534]">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Meet Our Team ends */}
      {/* Extra Banner starts */}
      <div className="my-14">
        <div
          style={{
            backgroundImage:
              "url('https://shadiparty.com/wp-content/uploads/2017/09/gallery-corporate_event-23.jpg')",
          }}
          className="w-full h-[450px] bg-center bg-cover bg-fixed text-white"
        >
          <div className="w-full h-full bg-gray-700/80 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-4xl leading-relaxed text-center">
              Don&apos;t Hesitate to Use Our Services,
              <br /> Your Event & Party Will Be Special!
            </h1>
            <p className="max-w-xl pt-3 pb-5 text-center text-sm md:text-base">
              Experience the difference as our dedicated team ensures every
              detail is flawlessly executed, making your event and party truly
              exceptional.
            </p>
            <Link to="/contact">
              <button className="py-3 px-5 rounded-lg bg-violet-500 text-white">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
