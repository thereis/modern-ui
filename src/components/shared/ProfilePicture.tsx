import React from "react";
import { ProfilePictureProps } from "common/types";

const ProfilePicture: React.FC<ProfilePictureProps> = ({ figure }) => {
  const habboFigure = {
    backgroundImage: `url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=${figure}")`,
    backgroundPositionY: "-14px",
    backgroundPositionX: "-9px"
  };

  return (
    <div
      id="profile-pic"
      className="profile-pic bg-blue-700 border border-blue-500 rounded shadow-inner w-12 h-12 bg-no-repeat bg-center"
      style={habboFigure}
    />
  );
};

export default ProfilePicture;
