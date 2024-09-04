import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

const useMenuMobile = () => {
  const [openMenuMobile, setOpenMenuMobile] = useLocalStorage("openMenuMobile", false);

  useEffect(() => {
    setOpenMenuMobile(false);
  }, []);


  return {openMenuMobile , setOpenMenuMobile};

}
 
export default useMenuMobile;