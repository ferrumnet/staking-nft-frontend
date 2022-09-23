import React from "react";
import IconClose from "../assets/img/f-icons/icon-close-dialog.svg";
import DialogFuturisticPrimary from "../assets/img/dialog-futuristic-primary.svg";
import DialogFuturisticSecondary from "../assets/img/dialog-futuristic-secondary-fbg.svg";
import "../assets/_Fdialog-styles.scss";

interface FdialogProps {
  title?: String;
  size?: String;
  type?: String;
  position?: String;
  dialogId?: String;
  className?: String;
  variant?: String;
  show?: boolean;
  showClose?: boolean;
  onHide?: any;
  hide?: boolean;
  children?: any;
  id?: any;
  style?: any;
}

export const FDialog = ({
  title = "",
  size = "",
  type = "",
  dialogId = "",
  className = "",
  position = "center",
  id = "",
  showClose = true,
  show = false,
  variant = "dark",
  onHide,
  children,
}: FdialogProps) => {
  return (
    <div
      className={`f-dialog-main ${className} ${show ? "show" : ""} f-dialog-${type} f-dialog-${title.toLowerCase().split(" ").join("-")}  `}
      id={title.toLowerCase().split(" ").join("")}
      style={show ? { display: "block" } : { display: "none" }}>
      <div className={`f-dialog ${size ? `f-dialog-${size}` : ""} ${position ? `f-dialog-${position}` : ""}  ${className}`}>
        <div className={`f-dialog-content bg-${variant}`}>
          {variant === "futuristic-primary" ? (
            <div className={`img-futuristic top`}>
              <img src={DialogFuturisticPrimary} alt={`img-${variant}`} />
              <img src={DialogFuturisticPrimary} alt={`img-${variant}`} />
            </div>
          ) : variant === "futuristic-secondary" ? (
            <div className={`img-futuristic top`}>
              <img src={DialogFuturisticSecondary} alt={`img-${variant}`} />
            </div>
          ) : null}

          <div className="f-dialog-header">
            <h3>{title}</h3>
            {showClose && (
              <a className="close-dialog" onClick={onHide}>
                <img src={IconClose} alt="close-dialog" />
              </a>
            )}
          </div>
          <div className="f-dialog-body">{children}</div>
          {variant === "futuristic-primary" ? (
            <div className={`img-futuristic bottom`}>
              <img src={DialogFuturisticPrimary} alt={`img-${variant}`} />
              <img src={DialogFuturisticPrimary} alt={`img-${variant}`} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
