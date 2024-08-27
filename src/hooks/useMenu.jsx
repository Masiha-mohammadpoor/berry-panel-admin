import useLocalStorage from "use-local-storage";

const useMenu = () => {
  const [openMenu, setOpenMenu] = useLocalStorage("openMenu", true);

  return {openMenu , setOpenMenu};

}
 
export default useMenu;