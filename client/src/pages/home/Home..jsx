import Addnewpassword from "../../components/auth/Addnewpassword";
import Otp from "../../components/auth/Otp";
import Signup from "../../components/auth/Signup";
import Addnewpassword from "../../components/auth/Addnewpassword";

export default function Home() {
  return (
    <div>
      <Signup />
      <Otp/>
      <Addnewpassword/>
    </div>
  )
}
