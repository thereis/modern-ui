import React from "react";

interface ProfilePictureProps {
  figure?: string;
  styles?: string;
  online?: boolean;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ figure, styles, online }) => {
  const habboFigure = {
    backgroundImage: `url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=${figure}")`,
    backgroundPositionY: "-14px",
    backgroundPositionX: "-9px"
  };

  const onlineIndicator = (
    <div
      className={`absolute h-3 w-3 ${
        online ? "bg-green-500" : "bg-gray-500"
      } rounded right-0 border-2 border-gray-100 -m-px`}
    />
  );

  return (
    <div
      id="profile-pic"
      className={`${styles && styles} rounded shadow-inner w-12 h-12`}
      style={habboFigure}
    >
      {/* Render online indicator if set in props */}
      {typeof online !== "undefined" && onlineIndicator}
    </div>
  );
};

export default ProfilePicture;
