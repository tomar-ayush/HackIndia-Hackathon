import { FaCheckCircle } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { SiFrontendmentor } from "react-icons/si";
const Features = () => {
    // Static feature data
    const featuresData = [
      {
        id: 1,
        icon:<FaCheckCircle size={40} color="white"/>, // Replace with your actual icon
        title: "Verified Credentials",
        paragraph: " Our platform ensures that all professional credentials are verified through a thorough validation process. This guarantees that users can trust the authenticity of the qualifications presented by professionals, reducing the risk of fraud and misinformation.",
      },
      {
        id: 2,
        icon: <SiBlockchaindotcom size={40} color="white"/>, // Replace with your actual icon
        title: "Blockchain-Based Token",
        paragraph: "Upon verification, professionals receive a unique blockchain-based token that serves as proof of their verified status. This token can be easily shared with employers or clients, streamlining the verification process and enhancing trust in professional relationships.",
      },
      {
        id: 3,
        icon: <SiFrontendmentor size={40} color="white"/>, // Replace with your actual icon
        title: "User-Friendly Dashboard",
        paragraph: "Professionals can manage their profiles effortlessly with our intuitive dashboard. They can upload documents, track their verification status, and showcase their achievements, experiences, and credentials—all in one place. ",
      },
    ];
  
    return (
      <section id="features" className="py-16  bg-slate-800 md:py-20 lg:py-28">
        <div className="container">
          {/* Section Title and Paragraph */}
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Main Features
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
  
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <div key={feature.id} className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="pr-[10px] text-base font-medium leading-relaxed">
                    {feature.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  