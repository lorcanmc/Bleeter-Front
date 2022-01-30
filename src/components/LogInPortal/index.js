import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton";
import LoginButton from "../LoginButton";

export default function LoginPortal() {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div
        style={{
          backgroundColor: "lightskyblue",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img style={{ height: "30px", margin: "5px" }} src={user.picture} alt={user.name} />
        <p style={{ margin: "5px", fontWeight: "bold" }}>{user.name}</p>
        <LogoutButton />
      </div>
    );
  } else {
    return <LoginButton />;
  }
}