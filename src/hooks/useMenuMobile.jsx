import useLocalStorage from "use-local-storage";

const useMenuMobile = () => {
  const [openMenuMobile, setOpenMenuMobile] = useLocalStorage(
    "openMenuMobile",
    false
  );

  return { openMenuMobile, setOpenMenuMobile };
};

export default useMenuMobile;
