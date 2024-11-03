interface IProps {
  id: number;
  image: string;
}
export const SquareImageBox = (props: IProps) => {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img src={props.image} alt="" className="w-full h-full" />
    </div>
  );
};
