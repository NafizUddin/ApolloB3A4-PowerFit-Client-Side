const Gallery = () => {
  return (
    <div className="mb-28 mx-7 md:mx-8 xl:mx-0">
      <h1 className="text-3xl lg:text-4xl text-[#033955] border-l-[10px] border-[#e08534] pl-2 font-bold">
        Fitness Journeys: PowerFit's Impact
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        <div className="grid gap-4">
          <div>
            <img
              className="h-[220px] md:h-[205px] lg:h-[285px] xl:h-[390px] w-full object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1606335543586-137481155deb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[150px] md:h-[140px] lg:h-[190px] xl:h-[250px] w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[163px] md:h-[152px] lg:h-[211px] xl:h-[286px] w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-[176px] md:h-[165px] lg:h-[223px] xl:h-[306px] w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <img
              className="h-[248px] md:h-[230px] lg:h-[320px] xl:h-[430px] w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1600026453249-24a43274d65a?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <img
              className="h-[111px] md:h-[103px] lg:h-[143px] xl:h-[190px] w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1599242460737-5174dba06145?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
