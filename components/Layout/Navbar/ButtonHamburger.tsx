function ButtonHamburger({
  showNav,
  setShowNav,
}: {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const hamburgerLine = `h-[3px] w-6 my-[2px] rounded-full bg-yellow-300 transition ease transform duration-300`;

  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center"
      aria-label="showNav"
      onClick={() => setShowNav(!showNav)}
    >
      <div
        className={`${hamburgerLine} ${
          showNav ? "rotate-45 translate-y-[7px] " : ""
        }`}
      />
      <div className={`${hamburgerLine} ${showNav ? "opacity-0" : ""}`} />
      <div
        className={`${hamburgerLine} ${
          showNav ? "-rotate-45 -translate-y-[7px] " : ""
        }`}
      />
    </button>
  );
}

export default ButtonHamburger;
