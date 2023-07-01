import { NextSeo } from "next-seo";

const socialMediaLinks = [
  {
    href: "https://github.com/therealdhruv",
    ariaLabel: "Visit Dhruv's GitHub profile",
    src: "/assets/github.png",
    alt: "GitHub logo",
  },
  {
    href: "https://linkedin.com/in/therealdhruv",
    ariaLabel: "Visit Dhruv's LinkedIn profile",
    src: "/assets/linkedin.png",
    alt: "LinkedIn logo",
  },
  {
    href: "https://twitter.com/thereal_dhruv",
    ariaLabel: "Visit Dhruv's Twitter profile",
    src: "/assets/twitter.png",
    alt: "Twitter logo",
  },
  {
    href: "https://instagram.com/thereal_dhruv",
    ariaLabel: "Visit Dhruv's Instagram profile",
    src: "/assets/instagram.png",
    alt: "Instagram logo",
  },
];

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
          description:
            "This is the portfolio website of Dhruv Pankaj Patel. Dhruv is a Information Technology Engineering undergraduate student at Vellore Institute of Technology, Vellore, Tamil Nadu, India.",
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
        I am a student of the 2021 batch of Information Technology at the
        Vellore Institute of Technology, Vellore. I primarily write programs
        using JavaScript and Java though I have experimented with other
        languages such as Python, TypeScript, Assembly (x86_64), R and C/C++.{" "}
        <br /> <br />
        My hobbies include playing chess, and binging too many videos on
        YouTube. I am currently learning various frontend technologies and it's
        integration with the backend.
      </div>

      <div className="md:mt-[8%] md:w-[60%] md:ml-[19%] mb-12 flex justify-evenly mt-14 md:space-x-20">
        {socialMediaLinks.map((link, index) => (
          <a
            href={link.href}
            aria-label={link.ariaLabel}
            target="_blank"
            key={index}
          >
            <img
              src={link.src}
              className="w-14 md:w-15 md:h-15"
              alt={link.alt}
            />
          </a>
        ))}
      </div>
    </>
  );
}
