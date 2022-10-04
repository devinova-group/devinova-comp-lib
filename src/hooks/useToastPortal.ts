import { uuid } from "../shared";
import { useState, useEffect } from "react";

export const useToastPortal = () => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${uuid()}`);

  useEffect(() => {
    const div = document.createElement("div");
    div.id = portalId;
    document.getElementsByTagName("body")[0].prepend(div);

    setLoaded(true);
  }, [portalId]);

  return { loaded, portalId };
};
