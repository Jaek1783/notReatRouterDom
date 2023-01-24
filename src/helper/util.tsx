import { useState, useEffect } from "react";
const useRouter = (): string => {
  const [path, setPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handlePopstate = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return path;
};

export default useRouter;
