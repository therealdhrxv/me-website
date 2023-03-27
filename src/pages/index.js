export default function Home() {
  return (
    <>
      <div className="text-[45px] md:text-8xl font-extrabold text-center leading-snug flex justify-center mt-[250px] md:mt-60">
        👋 Hi!, I am Dhruv
      </div>
      <div className="flex mt-11 md:mt-28 justify-evenly">
        <a href="https://github.com/therealdhruv">
          <img src={"/socialImages/g.svg"} className="w-14 md:w-20 md:h-20" />
        </a>
        <a href="https://linkedin.com/in/therealdhruv">
          <img src={"/socialImages/i.svg"} className="w-14 md:w-20 md:h-20" />
        </a>
        <a href="https://twitter.com/thereal_dhruv">
          <img src={"/socialImages/t.svg"} className="w-14 md:w-20 md:h-20" />
        </a>
        <a href="https://instagram.com/thereal_dhruv">
          <img src={"/socialImages/insta.svg"} className="w-14 md:w-20 md:h-20" />
        </a>
      </div>
    </>
  );
}
