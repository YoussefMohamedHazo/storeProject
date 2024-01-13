const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl sm:text-4xl font-bold leading-none tracking-tight">
          We love
        </h1>
        <div className=" stats bg-primary shadow">
          <div className="stat">
            <div className="font-bold stat-title text-primary-content tracking-widest text-4xl">
              HaZo
            </div>
          </div>
        </div>
      </div>
      <p className=" mt-6 text-lg max-w-2xl mx-auto leading-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        perferendis voluptate vitae quasi, atque veritatis vero voluptas
        cupiditate natus expedita?
      </p>
    </>
  );
};

export default About;
