"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RiLinkedinFill, RiTwitterXFill, RiGithubFill } from "react-icons/ri";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string; // path under /public
  linkedin?: string;
  twitter?: string;
  github?: string;
};

// Tech Team Members
const techMembers: TeamMember[] = [
  {
    name: "Esakki Valli Ram K",
    role: "AI Developer",
    bio: "Builds smart solutions by combining AI models with real-world applications.",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Manikandaprabu P",
    role: "Software Developer",
    bio: "Transforms concepts into efficient, user-friendly applications with clean and scalable code.",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "ThangaMurugan R",
    role: "Full Stack Developer",
    bio: "Delivers end-to-end solutions with secure, optimized, and maintainable code across frontend and backend.",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  }
];

const researchMembers: TeamMember[] = [
  {
    name: "Isha Mehta",
    role: "Applied Research Lead",
    bio: "Explores novel interaction patterns to make AI feel natural.",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Sara Khan",
    role: "Data Scientist",
    bio: "Designs evaluations and experiments to measure real‑world impact.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Alex Chen",
    role: "AI Research Engineer",
    bio: "Develops and tests new machine learning models, improving accuracy and efficiency.",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Priya Patel",
    role: "HCI Specialist",
    bio: "Studies how people interact with technology and creates user-friendly systems.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Jamal Williams",
    role: "Ethics & Responsible AI",
    bio: "Focuses on fairness, transparency, and ethical challenges in AI systems.",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
];

// Founders (shown at the top)
const foundersMembers: TeamMember[] = [
  {
    name: "Ajith Ilakkuvan",
    role: "Founder & CEO",
    bio: "Sets product vision and partners with teams to deliver impactful AI.",
    image: "/images/solutions/finace&accounts/Founder.png",
    linkedin: "https://www.linkedin.com/in/ajith-ilakkuvan-68a023212/",
  }
];

// Digital Marketing Team
const digitalMarketingMembers: TeamMember[] = [
  {
    name: "Market Research Team",
    role: "Market Research",
    bio: "Analyzes industry trends, customer behavior, and competitor insights to guide digital strategies. Conducts market segmentation and identifies growth opportunities through data-driven research.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Social Media Management",
    role: "Social Media",
    bio: "Manages brand presence on platforms like Instagram, LinkedIn, and Twitter by creating engaging posts, running campaigns, and tracking performance metrics to optimize reach and engagement.",
    twitter: "https://twitter.com/",
  },
  {
    name: "Digital Tech Specialist",
    role: "Tech & Analytics",
    bio: "Manages marketing technologies, analytics, and automation to improve campaign performance. Oversees Meta Ads and Google Ads campaigns, and sets up Google My Business accounts to boost visibility and engagement.",
    github: "https://github.com/",
  },
];

// Sales Support Team
const salesSupportMembers: TeamMember[] = [
  {
    name: "Sales Operations",
    role: "Sales Operations",
    bio: "Manages sales processes, tools, and reporting to improve efficiency and productivity. Handles CRM administration, sales forecasting, and performance metrics analysis.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Customer Success",
    role: "Success Management",
    bio: "Ensures customer satisfaction and retention by providing post-sales support, onboarding, and relationship management. Acts as the bridge between customers and internal teams.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lead Generation",
    role: "Lead Generation",
    bio: "Identifies and nurtures potential clients through targeted outreach, market research, and inbound strategies. Qualifies leads and ensures smooth handoff to sales.",
    linkedin: "https://www.linkedin.com/",
  },
];

const TeamCard = ({ m, isFounder = false }: { m: TeamMember; isFounder?: boolean }) => {
  if (isFounder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
      >
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
          <Image
            src={m.image || "/images/team/user-default.svg"}
            alt={m.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">{m.name}</h3>
        <p className="text-center text-[#16C3A6] font-medium mb-2">{m.role}</p>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">{m.bio}</p>
        <div className="flex justify-center space-x-4">
          {m.linkedin && (
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0077b5] transition-colors"
              aria-label={`${m.name}'s LinkedIn`}
            >
              <RiLinkedinFill className="w-5 h-5" />
            </a>
          )}
          {m.twitter && (
            <a
              href={m.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              aria-label={`${m.name}'s Twitter`}
            >
              <RiTwitterXFill className="w-5 h-5" />
            </a>
          )}
          {m.github && (
            <a
              href={m.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label={`${m.name}'s GitHub`}
            >
              <RiGithubFill className="w-5 h-5" />
            </a>
          )}
        </div>
      </motion.div>
    );
  }
  return null;
};

const TeamGrid = ({
  title,
  group,
  isFounder = false,
  description,
}: {
  title: string;
  group: TeamMember[];
  isFounder?: boolean;
  description?: string;
}) => {
  if (isFounder) {
    return (
      <div className="mb-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          {title}
        </h2>
        <div className="w-full max-w-3xl">
          {group.map((member, idx) => (
            <TeamCard key={idx} m={member} isFounder={true} />
          ))}
        </div>
      </div>
    );
  }

  const isLastSection = title === "Sales Support Team";
  
  return (
    <div className={isLastSection ? "mb-6" : "mb-10"}>
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {group.map((member, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{member.role}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mb-8 px-4"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        {title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default function TeamSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Meet Our Team
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A passionate team of builders, designers, and researchers crafting human‑centered AI solutions.
        </p>
      </motion.div>

      <TeamGrid title="" group={foundersMembers} isFounder={true} />

      
      <div className="max-w-4xl mx-auto mb-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Tech Team
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          The Tech Team is responsible for building and maintaining the backbone of our digital products and platforms. They specialize in software engineering, cloud infrastructure, and emerging technologies to create reliable, scalable, and secure systems. By driving automation, optimizing performance, and integrating modern tools, the Tech Team ensures seamless product delivery and enables innovation across all departments. Their work empowers every other team to perform efficiently and deliver value to customers.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto mb-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Research Team
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          The Research Team is dedicated to exploring innovative ideas, advancing knowledge, and shaping the future of our technology. They focus on applied research, artificial intelligence, data science, and responsible AI practices to uncover new solutions for real-world challenges. By running experiments, analyzing results, and collaborating with other teams, the Research Team ensures our organization stays at the cutting edge of scientific and technological progress.
        </p>
      </div>
      
      <TeamGrid title="Digital Marketing Team" group={digitalMarketingMembers} />
      <TeamGrid title="Sales Support Team" group={salesSupportMembers} />
    </div>
  );
}
