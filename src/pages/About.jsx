// Components
import Layout from "../components/Layout";
// Assets
import imageProfile from "../assets/images/yo.jpg";

const About = () => {
  return (
    <Layout>
      <div className="w-full flex justify-center mt-8 mb-16">
        <div className="w-4/5 flex justify-center">
          <div className="w-[350px] bg-white rounded-xl p-7">
            <div className="flex flex-col items-center">
              <img
                src={imageProfile}
                alt="Eduardo Serrano Jaime"
                className="rounded-full w-[170px] mb-2"
              />
              <h1>Eduardo Serrano Jaime</h1>
              <p className="text-sm">JavaScript Developer</p>
            </div>
            <div className="flex gap-2 justify-center text-xl my-2">
              <a href="https://github.com/EdsenxX" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/edsen/" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://edsen.dev" target="_blank" rel="noreferrer">
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </div>
            <p className="text-md text-center">
              Soy Javascript Developer con +3 años de experiencia trabajando
              profesionalmente. Tengo experiencia trabajando con instituciones
              publicas, consultoras de software, startups y también como freelancer
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
