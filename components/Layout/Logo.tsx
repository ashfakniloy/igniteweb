import Fire from "../Icons/Fire";

function Logo() {
  return (
    <div className="flex items-center">
      <Fire />
      <h3 className="text-[22px] text-white font-semibold">
        <span>Ignite</span>
        <span className="text-custom-yellow">Web</span>
      </h3>
    </div>
  );
}

export default Logo;
