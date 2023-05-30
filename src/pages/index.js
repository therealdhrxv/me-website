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

        <h1 className="text-[45px] md:text-7xl font-extrabold text-center leading-snug flex justify-center mt-10 md:mt-16">
          👋 Hi!, I am Dhruv
        </h1>

      </header>


      <div className="font-mono md:mt-[7%] md:w-[50%] md:ml-[25%] text-xl md:text-left text-left ml-4 mr-4 mt-10 leading-9">

        I am a student of the 2021 batch of Information Technology at the Vellore Institute of Technology, Vellore. I primarily write programs using JavaScript and Java though I have experimented with other languages such as Python, TypeScript, Assembly (x86_64), R and C/C++. <br /> <br />

        My hobbies include playing chess, and binging too many videos on YouTube. I am currently learning about the various frontend technologies and it's integration with the backend.

      </div>

      <div className="md:mt-[8%] md:w-[30%] md:ml-[35%] mt-6 mb-12">

        <div className="flex justify-evenly mt-14 md:space-x-20 md:mt-4">
          <a href="https://github.com/therealdhruv" aria-label="Visit Dhruv's GitHub profile">
            <img src={"/assets/github.png"} className="w-14 md:w-15 md:h-15" alt="GitHub logo" />
          </a>
          <a href="https://linkedin.com/in/therealdhruv" aria-label="Visit Dhruv's LinkedIn profile">
            <img src={"/assets/linkedin.png"} className="w-14 md:w-15 md:h-15" alt="LinkedIn logo" />
          </a>
          <a href="https://twitter.com/thereal_dhruv" aria-label="Visit Dhruv's Twitter profile">
            <img src={"/assets/twitter.png"} className="w-14 md:w-15 md:h-15" alt="Twitter logo" />
          </a>
          <a href="https://instagram.com/thereal_dhruv" aria-label="Visit Dhruv's Instagram profile">
            <img src={"/assets/instagram.png"} className="w-14 md:w-15 md:h-15" alt="Instagram logo" />
          </a>
        </div>

      </div>

    </>
  );
}
