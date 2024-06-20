import { useEffect, useState } from "react";
import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
} from "@/base-components";
import { faker as $f } from "@/utils";
import useTokenVerification from "../../../hooks/useTokenVerification";

function Main(props) {
  const {isVerified, verificationResult} = useTokenVerification();
  const [userName, setUserName] = useState('');


  const Logout = ()=> {
    localStorage.removeItem("userData");
    location.reload();
  }



  useEffect(()=>{
    if(isVerified) setUserName(verificationResult.user.name);
  }, [isVerified])


  return (
    <>
      {/* BEGIN: Top Bar */}
      <div className="top-bar">
        {/* BEGIN: Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="-intro-x mr-auto hidden sm:flex"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Application</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
        {/* END: Breadcrumb */}
        {/* BEGIN: Search */}
        {/* END: Search  */}
        {/* BEGIN: Notifications */}
        {/* END: Notifications  */}
        {/* BEGIN: Account Menu */}
        <Dropdown className="intro-x w-8 h-8">
          <DropdownToggle
            tag="div"
            role="button"
            className="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
          >
            <img
              alt="Midone Tailwind HTML Admin Template"
              src={$f()[9].photos[0]}
            />
          </DropdownToggle>
          <DropdownMenu className="w-56">
            <DropdownContent className="bg-primary text-white">
              <DropdownHeader tag="div" className="!font-normal">
                <div className="font-medium">{userName}</div>
              </DropdownHeader>
              <DropdownDivider className="border-white/[0.08]" />
              <DropdownItem className="hover:bg-white/5">
                <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
              </DropdownItem>
              <DropdownItem className="hover:bg-white/5">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
              </DropdownItem>
              <DropdownDivider className="border-white/[0.08]" />
               <button onClick = {()=>{Logout()}}>
              <DropdownItem className="hover:bg-white/5">
                <Lucide 
                  icon="ToggleRight" className="w-4 h-4 mr-2" /> 
                    Logout
              </DropdownItem>
               </button>
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;
