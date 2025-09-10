import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "AI Assistant: The Future of Customer Interaction",
    paragraph:
      "Our AI-powered chatbot revolutionizes customer service with 24/7 availability, natural language processing, and multi-language support. It learns from interactions to provide increasingly accurate responses, handles multiple queries simultaneously, and seamlessly escalates complex issues to human agents. The system integrates with your existing CRM and offers detailed analytics to track performance and customer satisfaction metrics.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "",
      image: "",
      designation: "AI Solutions Architect",
    },
    publishDate: "2025",
    tags: ["AI", "Customer Interaction"], // ✅ added
  },
  {
    id: 2,
    title: "Photo Sharing: Smart Event Photography Redefined",
    paragraph:
      "Transform your event photography with our intelligent photo sharing platform. Using advanced facial recognition, our system automatically organizes and tags photos, making it easy for guests to find images of themselves. Features include real-time photo uploads, AI-powered editing tools, custom event galleries, and instant social media sharing. The platform also provides event organizers with valuable analytics on photo engagement and guest participation.",
    image: "/images/blog/blog-02.png",
    author: {
      name: "",
      image: "/images/blog/author-02.png",
      designation: "Chief Technology Officer",
    },
    publishDate: "2025",
    tags: ["Photography", "AI", "Events"], // ✅ added
  },
  {
    id: 3,
    title: "AutoCAD for Jewellery: Precision Meets Creativity",
    paragraph:
      "Master jewellery design with our specialized AutoCAD solutions. Our tools enable designers to create intricate, precise 3D models with features like parametric design, gemstone libraries, and material simulation. The software supports all aspects of jewellery production, from initial concept to manufacturing, including photorealistic rendering, technical drawings, and export formats compatible with 3D printing and CNC milling. Perfect for both bespoke creations and mass production.",
    image: "/images/blog/blog-04.jpg",
    author: {
      name: "",
      image: "/images/blog/author-ram.png",
      designation: "Senior CAD Designer",
    },
    publishDate: "2025",
    tags: ["AutoCAD", "Jewellery Design", "3D Modeling"], // ✅ added
  },
];

export default blogData;
