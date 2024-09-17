import React from "react";
import { useSelector } from "react-redux";

// images
import maleProfileImage from "../assets/images/profile/profile-pic-1.png";
import femaleProfileImage from "../assets/images/profile/profile-pic-2.png";

const ProfileImage = ({ size = 36, className = "size-9" }) => {
  const { userData } = useSelector((state) => state);
  const userGender = userData.info.gender.toLowerCase();

  return userGender === "erkak" ? (
    <img
      width={size}
      height={size}
      className={className}
      src={maleProfileImage}
      alt="male profile image"
    />
  ) : (
    <img
      width={size}
      height={size}
      className={className}
      src={femaleProfileImage}
      alt="female profile image"
    />
  );
};

export default ProfileImage;
