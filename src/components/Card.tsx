import { createContext, PropsWithChildren, useContext } from "react";

type ArticleCard = {
  image: string;
  title: string;
  date: string;
  description: string;
};

type CardContextType = {
  data: ArticleCard;
};

type CardProps = PropsWithChildren & {
  data: ArticleCard;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error();
  }
  return context;
};

const Card = ({ children, data }: CardProps) => {
  return (
    <CardContext.Provider value={{ data }}>
      <div className="flex gap-y-3 flex-col p-3 rounded-lg shadow-lg bg-slate-200">
        {children}
      </div>
    </CardContext.Provider>
  );
};

Card.Image = function CardImage() {
  const { data } = useCardContext();
  return <img className="rounded" src={data.image} />;
};

Card.TitleAndDate = function CardTitleAndDate() {
  const { data } = useCardContext();
  return (
    <div className="flex justify-between items-center">
      <p className="text-lg">{data.title}</p>
      <span className="italic text-sm">{data.date}</span>
    </div>
  );
};

Card.Description = function CardDescription() {
  const { data } = useCardContext();
  return <p className="text-sm">{data.description}</p>;
};

Card.Button = function CardButton() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Open article
    </button>
  );
};

export default Card;
