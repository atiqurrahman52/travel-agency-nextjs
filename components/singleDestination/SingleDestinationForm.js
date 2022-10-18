import { useState } from "react";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';

const SingleDestinationForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [travelDate, setTravelDate] = useState(null);
  const [totalNumber, setTotalNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userForm = {
      userName,
      userEmail,
      userNumber,
      travelDate,
      totalNumber,
      userMessage,
    };
    console.log(userForm);
    toast.success("Your Application has been send")
    setUserName("")
    setUserEmail("")
    setUserNumber("")
    setTravelDate(null)
    setTotalNumber("")
    setUserMessage("")
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="p-[33px] rounded-[20px] bg-white shadow-[0px_0px_40px_rgba(0,0,0,0.05)]"
    >
      <ToastContainer />
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="appearance-none block w-full text-sm leading-[16px] bg-[#F8F8F8] rounded-[8px] p-[16px] mb-[16px] border-0 "
        id=""
        type="text"
        placeholder="Your Name"
      />
      <input
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        className="appearance-none block w-full text-sm leading-[16px] bg-[#F8F8F8] rounded-[8px] p-[16px] mb-[16px] border-0 focus:border-0"
        id=""
        type="email"
        placeholder="Your Email"
      />
      <input
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
        className="appearance-none block w-full text-sm leading-[16px] bg-[#F8F8F8] rounded-[8px] p-[16px] mb-[16px] border-0 focus:border-0"
        id=""
        type="tel"
        placeholder="Phone"
      />
      <DatePicker
        className="appearance-none bg-[#F8F8F8]  text-sm rounded-lg mb-[16px] w-full p-[16px] datepicker-input border-0 focus:border-0"
        placeholderText="Choose Date of Travel"
        disabledKeyboardNavigation
        selected={travelDate}
        minDate={new Date()}
        onChange={(date) => setTravelDate(date)}
      />
      <input
        value={totalNumber}
        onChange={(e) => setTotalNumber(e.target.value)}
        className="appearance-none block w-full  leading-[16px] bg-[#F8F8F8] rounded-[8px] p-[16px] mb-[16px] border-0 focus:border-0"
        id=""
        type="text"
        placeholder="No of People"
      />
      <textarea
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        className="appearance-none block text-sm leading-[16px] bg-[#F8F8F8] rounded-[8px] p-[16px] mb-[16px] w-full border-0 focus:border-0"
        id=""
        placeholder="Message"
        name=""
        cols="30"
        rows="5"
      />
      <button
        type="submit"
        className="text-white text-base font-nunito font-semibold leading-[16px] p-3 w-full bg-[#D00338E5] rounded-[8px]"
      >
        Send Enquiry
      </button>
    </form>
  );
};

export default SingleDestinationForm;
