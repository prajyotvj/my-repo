import { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Protected(props) {
  const { Component, role } = props;
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      toast.error("Please Login to access!");
    } else if (role && !role.includes(user.role)) {
      navigate("/");
      toast.error("Unauthorized access!");
    }
  }, [user, role, navigate]);

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
