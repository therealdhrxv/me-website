import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Dhruv Pankaj Patel"
        description="This is the portfolio website of Dhruv Pankaj Patel. Dhruv is a Information Technology Engineering undergraduate student at Vellore Institute of Technology, Vellore, Tamil Nadu, India."
        canonical="https://therealdhruv.tech/"
        openGraph={{
          url: "https://therealdhruv.tech/",
          title: "Dhruv Pankaj Patel",
          description: "This is the portfolio website of Dhruv Pankaj Patel. Dhruv is a Information Technology Engineering undergraduate student at Vellore Institute of Technology, Vellore, Tamil Nadu, India.",
          images: [
            {
              url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F92241443%3Fv%3D4&tbnid=Gy6fb0GoiOlMAM&vet=12ahUKEwjJkMjDq5L-AhXFF2IAHaRXCowQMygAegQIARBP..i&imgrefurl=https%3A%2F%2Fgithub.com%2Ftherealdhruv&docid=qFGwyBru2MfbsM&w=400&h=400&q=dhruv%20pankaj%20patel&ved=2ahUKEwjJkMjDq5L-AhXFF2IAHaRXCowQMygAegQIARBP",
              width: 1200,
              height: 630,
              alt: "Dhruv Pankaj Patel",
            },
          ],
          site_name: "Dhruv Pankaj Patel",
        }}
        twitter={{
          handle: "@thereal_dhruv",
          site: "@thereal_dhruv",
          cardType: "summary_large_image",
        }}
      />
      <header>
        <h1 className="text-[45px] md:text-8xl font-extrabold text-center leading-snug flex justify-center mt-[250px] md:mt-60">
          👋 Hi!, I am Dhruv
        </h1>
      </header>
      <main>
        <nav className="flex mt-11 md:mt-28 justify-evenly">
          <a href="https://github.com/therealdhruv" aria-label="Visit Dhruv's GitHub profile">
            <img src={"/socialImages/g.svg"} className="w-14 md:w-20 md:h-20" alt="GitHub logo" />
          </a>
          <a href="https://linkedin.com/in/therealdhruv" aria-label="Visit Dhruv's LinkedIn profile">
            <img src={"/socialImages/i.svg"} className="w-14 md:w-20 md:h-20" alt="LinkedIn logo" />
          </a>
          <a href="https://twitter.com/thereal_dhruv" aria-label="Visit Dhruv's Twitter profile">
            <img src={"/socialImages/t.svg"} className="w-14 md:w-20 md:h-20" alt="Twitter logo" />
          </a>
          <a href="https://instagram.com/thereal_dhruv" aria-label="Visit Dhruv's Instagram profile">
            <img src={"/socialImages/insta.svg"} className="w-14 md:w-20 md:h-20" alt="Instagram logo" />
          </a>
        </nav>
      </main>
    </>
  );
}
