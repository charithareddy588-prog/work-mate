import { Routes, Route } from "react-router-dom";

import Onboarding from "./pages/Onboarding";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import TermsAndPrivacy from "./pages/TermsAndPrivacy";
import EmailVerification from "./pages/EmailVerification";
import Welcome from "./pages/Welcome";
import CompleteProfile from "./pages/CompleteProfile";
import MyProfile from "./pages/MyProfile";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/terms-and-privacy" element={<TermsAndPrivacy />}/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/complete-profile" element={<CompleteProfile />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;