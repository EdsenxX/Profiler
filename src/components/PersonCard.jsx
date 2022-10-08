// Dependencies
import moment from "moment";
// Assets
import style from "../styles/PersonCard.module.scss";

const PersonCard = ({ person }) => {
  const getName = () => {
    const { name } = person;
    return `${name.title} ${name.first} ${name.last}`;
  };

  const getImage = () => {
    const { picture } = person;
    return picture.medium;
  };

  const getLocation = () => {
    const { location } = person;
    return `${location.city}, ${location.country}`;
  };

  return (
    <div
      className={`w-full rounded-xl shadow-xl ${style.PersonCard} rounded-xl bg-white`}
    >
      <div
        className={`flex flex-col py-10 items-center ${style.PersonCard__header} rounded-t-xl`}
      >
        <img
          src={getImage()}
          alt={getName()}
          className="rounded-full w-[100px] mb-2 border-2 border-white"
        />
        <p>{getName()}</p>
      </div>
      <div className="flex flex-col justify-center gap-2 px-7 pb-7">
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-envelope"></i>
          <p className="text-sm">{person.email}</p>
        </div>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-earth-americas"></i>
          <p className="text-sm ">{getLocation()}</p>
        </div>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-calendar"></i>
          <p className="text-sm">
            {moment(person.dob.date).format("DD/MM/YYYY")}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-phone"></i>
          <p className="text-sm">{person.cell}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
