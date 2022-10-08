// Dependencies
import { useState, useEffect } from "react";
import { connect } from "react-redux";
// Components
import Layout from "../components/Layout";
import PersonCard from "../components/PersonCard";
import Button from "../components/Button";
import Loader from "../components/Loader";
// Services
import PeopleService from "../services/People";
// Actions
import * as peopleActions from "../actions/peopleActions";

const peopleService = new PeopleService();

const Home = ({ peopleReducer, addPeople }) => {
  const [loading, setLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const { people } = peopleReducer;
    if (people.length === 0) {
      init();
    }
  }, []);

  const init = async () => {
    setMainLoading(true);
    await getPeople();
    setMainLoading(false);
  };

  const getPeople = async () => {
    if (loading) return;
    setLoading(true);
    await peopleService
      .getPeople()
      .then((people) => {
        addPeople(people);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const people = () => {
    const { people } = peopleReducer;
    // filter people by search
    const filteredPeople = people.filter((person) => {
      const { name } = person;
      const fullName = `${name.title} ${name.first} ${name.last}`;
      return fullName.toLowerCase().includes(search.toLowerCase());
    });
    return filteredPeople;
  };

  if (mainLoading) return <Loader />;
  return (
    <Layout>
      <div className="w-full flex justify-center mt-8 mb-16">
        <div className="w-4/5">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 mb-3 rounded-lg shadow-md shadow-black/30 outline-primary-100"
            placeholder="Filtrar por nombre..."
          />
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {people().map((person, idx) => (
              <PersonCard person={person} key={idx} />
            ))}
          </div>
          {people().length === 0 && (
            <div className="w-full flex justify-center mt-8">
              <p className="text-gray-500 text-lg text-center">
                No se han encontrado personas que coincidan con este filtro,
                intenta buscando a otra persona
              </p>
            </div>
          )}
          <div className="w-full flex justify-center my-4">
            <Button onClick={getPeople} loading={loading}>
              Mostrar más
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ peopleReducer }) => ({
  peopleReducer,
});

export default connect(mapStateToProps, peopleActions)(Home);
