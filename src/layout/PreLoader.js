import Image from "next/image";
import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="preloader" style={{ display: loading ? "block" : "none", background: '#FDFDFD' }}>
      <div className="centrize full-width">
        <div className="vertical-center">
            <img src={'images/loading.gif'} width={250} alt="loading" />
        </div>
      </div>
    </div>
  );
};
export default PreLoader;
