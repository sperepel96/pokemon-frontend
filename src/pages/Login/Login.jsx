import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import "./login.scss";
import { AuthApi } from "../../Api/auth.js";

const Login = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  const [account, setAccount] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [code, setCode] = useState(null);

  const handleLogin = async () => {
    if (!window.ethereum) return alert("Metamask not installed!");
    const web3 = new Web3(window.ethereum);

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);

    const { nonce } = await AuthApi.register(accounts[0]);
    setCode(nonce);

    const signature = await web3.eth.personal.sign(
      `Sign this message to log in: ${nonce}`,
      accounts[0],
      nonce,
    );
    const { token } = await AuthApi.verify(accounts[0], signature);
    localStorage.setItem("token", token);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      AuthApi.fetchProfile(token)
        .then((data) => setProfile(data))
        .catch((error) => {
          console.log(error.message);
          localStorage.removeItem("token");
          setProfile(null);
        });
    }
  }, []);

  const handleMouseDown = () => {
    setIsVisible(true);
    console.log("change");
  };

  const handleMouseUp = () => {
    setIsVisible(false);
    console.log("chang1e");
  };

  return (
    <div className="login_page">
      <div className={"login_page__card"}>
        <div className={"login_page__card__title"}>Login with Metamask</div>
        <div className={"login_page__card__description"}>
          Welcome! Log in using your Metamask signature.
        </div>

        <div className={"login_page__card__form"}>
          {!!code && (
            <>
              <div className={"login_page__card__form__secret_code__title"}>
                Secret code:
              </div>
              <div
                className={`login_page__card__form__secret_code__text ${isVisible ? "blur-text--visible" : ""}`}
                onMouseEnter={handleMouseDown}
                onMouseLeave={handleMouseUp}
              >
                {code}
              </div>
            </>
          )}
        </div>
        <button
          onClick={handleLogin}
          className="btn waves-effect waves-light blue darken-2"
        >
          MetaMask Login
        </button>
      </div>

      {/*{account && <p>Connected as: {account}</p>}*/}
      {/*{token && <p>JWT Token: {token.toString()}</p>}*/}
    </div>
  );
};

export default Login;
