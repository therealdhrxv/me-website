import { NextSeo } from "next-seo";

const socials = [
	{
		href: "https://github.com/therealdhrxv",
		ariaLabel: "Visit Dhruv's GitHub profile",
		src: "/assets/github.png",
		alt: "GitHub logo",
	},
	{
		href: "https://linkedin.com/in/therealdhrxv",
		ariaLabel: "Visit Dhruv's LinkedIn profile",
		src: "/assets/linkedin.png",
		alt: "LinkedIn logo",
	},
	{
		href: "https://twitter.com/therealdhrxv",
		ariaLabel: "Visit Dhruv's Twitter profile",
		src: "/assets/twitter.png",
		alt: "Twitter logo",
	},
	{
		href: "https://instagram.com/therealdhrxv",
		ariaLabel: "Visit Dhruv's Instagram profile",
		src: "/assets/instagram.png",
		alt: "Instagram logo",
	},
];

export default function Home() {
	return (
		<>
			<div>
				<NextSeo
					title="Dhruv Pankaj Patel"
					description="This is the portfolio website of Dhruv Pankaj Patel. Dhruv is a Information Technology Engineering undergraduate student at Vellore Institute of Technology, Vellore, Tamil Nadu, India."
					canonical="https://therealdhrxv.me/"
					openGraph={{
						url: "https://therealdhrxv.me/",
						title: "Dhruv Pankaj Patel",
						description:
							"This is the portfolio website of Dhruv Pankaj Patel. Dhruv is a Information Technology Engineering undergraduate student at Vellore Institute of Technology, Vellore, Tamil Nadu, India.",
						images: [
							{
								url: "https://avatars.githubusercontent.com/u/92241443?v=4",
								width: 1200,
								height: 630,
								alt: "Dhruv Pankaj Patel",
							},
						],
						site_name: "Dhruv Pankaj Patel",
					}}
					twitter={{
						handle: "@therealdhrxv",
						site: "@therealdhrxv",
						cardType: "summary_large_image",
					}}
				/>

				<header>
					<div className="text-[45px] md:text-7xl font-extrabold text-center leading-snug flex justify-center mt-10 md:mt-[9%]">
						👋
						<span
							className="
								bg-[length:300%_300%] 
								bg-no-repeat animate-bgMove bg-clip-text text-transparent md:ml-7 ml-3
								bg-gradient-to-r 
								
								from-[#5E81AC]
								via-[#8FBCBB] 
								to-[#D08770]
							"
						>
							Hi!, I am Dhruv
						</span>
					</div>
				</header>

				<div
					className="font-mono md:mt-[9%] md:w-[50%] md:ml-[27%] text-xl md:text-left text-left ml-4 mr-4 mt-10 leading-9"
					style={{ color: "#4C566A" }}
				>
					I'm an Engineering student, Class of 2021, at Vellore
					Institute of Technology, Vellore. I'm a technologist
					passionate about working with great people to build
					products that people love.
				</div>

				<div className="md:mt-[8%] md:w-[60%] md:ml-[19%] mb-12 flex justify-evenly mt-14 md:space-x-20">
					{socials.map((link, index) => (
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
			</div>
		</>
	);
}
