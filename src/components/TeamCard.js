function TeamCard({ image, name, desc }) {
  return (
    <div className="w-full max-w-[350px] bg-[#222] rounded-md py-6 px-9 cursor-pointer transition duration-300 ease-out hover:bg-[crimson] group overflow-hidden ">
      <div className=" transition duration-300 ease-out group-hover:scale-105 flex flex-col justify-center items-center space-y-3">
        <img
          src={image}
          alt={name}
          className="w-[150px] h-[150px] rounded-full border-4 border-[crimson] transition duration-300 ease-out  group-hover:border-white"
        />

        <h2 className="text-xl md:text-2xl font-medium">{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default TeamCard;
