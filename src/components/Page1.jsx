import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function Page1() {
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/Hostel_Allocation_Assignment/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return (
    <section className="sign-in">
      <h1>Hostel Booking </h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </section>
  );
}

export default Page1;
