import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";
import NavBar from "./components/common/NavBar/NavBar";
import Header from "./components/common/Header/Header";
import SettingsProvider from "./contexts/SettingsContext";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Calendar from "./pages/Calendar";
import Forums from "./pages/Forums";
import Friends from "./pages/Friends";
import Map from "./pages/Map";
import Messages from "./pages/Messages";
import Services from "./pages/Services";
import Message from "./components/features/Messages/Message";

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(UserContext);
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return <ProtectedLayout>{children}</ProtectedLayout>;
};

const ProtectedLayout = ({ children }) => {
    return (
        <SettingsProvider>
            <div className="flex flex-col justify-between w-full h-full">
                <Header />
                <main className="h-full w-full p-1 flex-1 overflow-auto pt-12 pb-28">
                    {children}
                </main>
                <NavBar />
            </div>
        </SettingsProvider>
    );
};

function App() {
    return (
        <div className="h-screen w-screen font-poppins bg-slate-900">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Feed />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/settings/*"
                    element={
                        <ProtectedRoute>
                            <Settings />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/calendar"
                    element={
                        <ProtectedRoute>
                            <Calendar />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/messages"
                    element={
                        <ProtectedRoute>
                            <Messages />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/message/:conversationId"
                    element={
                        <ProtectedRoute>
                            <Message />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/services"
                    element={
                        <ProtectedRoute>
                            <Services />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/user/:userId"
                    element={
                        <ProtectedRoute>
                            <User />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/friends/*"
                    element={
                        <ProtectedRoute>
                            <Friends />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/forums"
                    element={
                        <ProtectedRoute>
                            <Forums />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/map/:locationName"
                    element={
                        <ProtectedRoute>
                            <Map />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
