import happyCustomer from "../assets/happyCustomer.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { useEffect } from "react";
import { FiTarget } from "react-icons/fi";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import teamInfo from "../jsons/teamInfo.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import testimonialJson from "../jsons/testimonialInfo.json";
import quotes from "../assets/straight-quotes.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import useWarnIfCartNotEmpty from "../CustomHooks/useWarnIfCartNotEmpty";

const AboutUs = () => {
  useWarnIfCartNotEmpty();

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
              <div className="flex gap-1 items-center">
                <h1 className="text-4xl font-bold">200</h1>
                <h1 className="text-4xl font-bold">K+</h1>
              </div>
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
                className="w-full h-[450px] transition duration-300 hover:grayscale object-fill group-hover:scale-110 px-6 md:px-0"
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
      {/* Testimonial starts */}
      <div className="my-24">
        <SectionTitle
          sub="Hear from Our Customers"
          heading="Real People. Real Results."
          description="See what our customers are saying about how our fitness accessories have helped them achieve their goals."
        />
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialJson.map((singleCustomer, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center mt-12">
                <div className="mb-14">
                  <img src={quotes} className="w-[60px] md:w-[100px]" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold lg:max-w-3xl lg:mx-auto text-center leading-normal mx-16">
                  {singleCustomer.message}
                </h1>
                <h1 className="text-xl text-center mt-10 font-semibold text-[#e08534]">
                  {singleCustomer.name}
                </h1>
                <h1 className="text-gray-500 mt-3">
                  {singleCustomer.designation}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Testimonial Ends */}

      {/* Contact us starts */}
      <div className="my-12">
        <SectionTitle
          sub="Get Fit. Get Help."
          heading="We're Here for You"
          description="Have questions or need advice finding the perfect fitness accessories? Reach out today!"
        />
        <div className="w-full pb-12 px-6 mt-5 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="mb-8 lg:mb-0 w-full h-[580px] md:max-w-[550px] md:mx-auto md:h-[465px] lg:w-full lg:h-full bg-[#033955] text-white px-7 pb-5 rounded-md mt-4">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold pt-10">
                  Reach Out & Get Sweating!
                </h1>
                <p>
                  We're here to support your fitness journey every step of the
                  way. Whether you have questions about our products, need help
                  choosing the right gear, or just want to chat with a fitness
                  enthusiast, we'd love to hear from you! Our friendly team is
                  available through multiple channels to ensure a quick and
                  convenient connection. Let's get you on the path to achieving
                  your fitness goals!
                </p>
                <div className="flex items-center gap-4">
                  <FaLocationDot className="text-lg" />
                  <span className="text-lg">Los Angeles, USA</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-lg" />
                  <span className="text-lg">(+01) 123 456 7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <MdMarkEmailRead className="text-lg" />
                  <span className="text-lg">powerfit@domain.com</span>
                </div>
                <div className="flex items-center gap-8 mt-4">
                  <FaFacebook className="text-xl hover:-translate-y-1" />
                  <FaInstagram className="text-xl hover:-translate-y-1" />
                  <FaYoutube className="text-xl hover:-translate-y-1" />
                  <FaLinkedinIn className="text-xl hover:-translate-y-1" />
                </div>
              </div>
            </div>
            <div className="col-span-2 mt-7">
              <div className="mx-auto w-full md:max-w-[550px]">
                <form>
                  <div className="mb-5">
                    <label htmlFor="name" className="mb-3 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-[#033955] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="email" className="mb-3 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@domain.com"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-[#033955] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="subject" className="mb-3 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter your subject"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-[#033955] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="message" className="mb-3 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-[#033955] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div>
                    <button className="px-4 py-3 rounded-lg text-white btn-custom-two bg-[#033955] font-semibold">
                      Contact Us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact us ends */}
    </div>
  );
};

export default AboutUs;
