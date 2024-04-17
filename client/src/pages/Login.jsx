import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
    const { user, login, signUpUser } = useContext(UserContext);
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const [signIn, setSignIn] = useState({
        username: "",
        password: "",
    });
    const [signUp, setSignUp] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleSigninChange = (e) => {
        setSignIn({
            ...signIn,
            [e.target.name]: e.target.value,
        });
    };

    const submitSignIn = async () => {
        await login(signIn);
    };

    const handleSignupChange = (e) => {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value,
        });
    };

    const submitSignUp = () => {
        signUpUser();
    };

    return (
        <div className="flex flex-col gap-20 h-full w-full justify-center items-center">
            <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-cyan-500">Petsy</p>
                <p className="text-slate-300">All things Pets 🐾</p>
            </div>
            {!isSignIn && !isSignUp ? (
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => setIsSignIn(true)}
                        className="bg-red-500 text-white rounded-2xl w-[160px] h-[40px]"
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setIsSignUp(true)}
                        className="bg-blue-500 text-white rounded-2xl w-[160px] h-[40px]"
                    >
                        Sign Up
                    </button>
                </div>
            ) : (
                <div
                    onClick={() => {
                        setIsSignIn(false);
                        setIsSignUp(false);
                    }}
                    className="flex flex-start"
                >
                    <button className="w-[60px] h-[40px] rounded-lg bg-red-500 text-white text-lg text-center">
                        Back
                    </button>
                </div>
            )}

            {isSignIn && (
                <div className="flex flex-col gap-8 items-center">
                    <input
                        onChange={handleSigninChange}
                        type="text"
                        className="pl-2 w-[220px] h-[40px] border border-red-500 rounded-xl"
                        value={signIn.username}
                        name={"username"}
                        placeholder="Username..."
                    />
                    <input
                        onChange={handleSigninChange}
                        type="text"
                        className="pl-2 w-[220px] h-[40px] border border-red-500 rounded-xl"
                        value={signIn.password}
                        name={"password"}
                        placeholder="Password..."
                    />
                    <button
                        onClick={submitSignIn}
                        className="bg-red-500 text-white rounded-2xl w-[160px] h-[40px]"
                    >
                        Submit
                    </button>
                </div>
            )}

            {isSignUp && (
                <div className="flex flex-col gap-8 items-center">
                    <input
                        onChange={handleSignupChange}
                        type="text"
                        className="pl-2 w-[220px] h-[40px] border border-red-500 rounded-xl"
                        value={signUp.email}
                        name={"email"}
                        placeholder="Email..."
                    />
                    <input
                        onChange={handleSignupChange}
                        type="text"
                        className="pl-2 w-[220px] h-[40px] border border-red-500 rounded-xl"
                        value={signUp.username}
                        name={"username"}
                        placeholder="Username..."
                    />
                    <input
                        onChange={handleSignupChange}
                        type="text"
                        className="pl-2 w-[220px] h-[40px] border border-red-500 rounded-xl"
                        value={signUp.password}
                        name={"password"}
                        placeholder="Password..."
                    />
                    <button
                        onClick={submitSignUp}
                        className="bg-blue-500 text-white rounded-2xl w-[160px] h-[40px]"
                    >
                        Signup
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
