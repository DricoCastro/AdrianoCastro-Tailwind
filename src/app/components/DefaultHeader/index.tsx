"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import IconButton from "@mui/material/IconButton/IconButton";
import Divider from "@mui/material/Divider/Divider";
import Menu from "@mui/material/Menu/Menu";

const logoLetterWhite = require("../../../../public/svgs/AC-white.svg");
const menuIcon = require("../../../../public/icons/menu.svg");

export const DefaultHeader = () => {
  const router = useRouter();
  const [drawer, setDrawer] = useState<null | HTMLElement>(null);
  const openDrawer = drawer !== null;
  function openUserMenu(event: React.MouseEvent<HTMLElement>) {
    setDrawer(event.currentTarget);
  }
  const handleClose = () => {
    setDrawer(null);
  };

  function onTapHome() {
    router.push("/");
  }

  return (
    <div
      className={`
      lg:px-48 py-5 
      w-full
      bg-blackPearl
      flex
      items-center
      justify-between
      px-[15px]
      text-white
  `}
    >
      <div
        className={`
      w-1/5
      flex
      items-start
  `}
      >
        <Image
          width={60}
          style={{ cursor: "pointer" }}
          src={logoLetterWhite}
          alt="letterLogo"
          onClick={onTapHome}
        />
      </div>
      <div
        className={`
        w-3/5
        flex
        flex-row
        items-center
        justify-between
        max-lg:hidden
      `}
      >
        <a
          className={`
          cursor-pointer
          text-base
          font-bold
          hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[3px] before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-royalBlue before:absolute before:left-0 before:bottom-[-2px]
          `}
        >
          ME
        </a>
        <a
          className={`
         cursor-pointer
         text-base
         font-bold
         hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[3px] before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-royalBlue before:absolute before:left-0 before:bottom-[-2px]
         `}
        >
          PROJECTS
        </a>
        <a
          className={`
          cursor-pointer
          text-base
          font-bold
          hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[3px] before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-royalBlue before:absolute before:left-0 before:bottom-[-2px]
          `}
        >
          CERTIFICATES
        </a>
        <a
          className={`
          cursor-pointer
          text-base
          font-bold
          hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[3px] before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-royalBlue before:absolute before:left-0 before:bottom-[-2px]
          `}
        >
          WHY ME?
        </a>
        <a
          className={`
        cursor-pointer
        text-base
        font-bold
        hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[3px] before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-royalBlue before:absolute before:left-0 before:bottom-[-2px]
        `}
        >
          LET´S TALK
        </a>
      </div>
      <div
        className={`
        lg:hidden
        `}
      >
        <IconButton
          onClick={openUserMenu}
          size="large"
          sx={{ ml: 0 }}
          aria-controls={openDrawer ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openDrawer ? "true" : undefined}
        >
          <Image
            width={32}
            height={32}
            style={{ cursor: "pointer" }}
            src={menuIcon}
            alt="menuIcon"
          />
        </IconButton>
      </div>
      <Menu
        anchorEl={drawer}
        id="account-menu"
        open={openDrawer}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 4px 8px var(--biscay))",
            borderRadius: "10px",
            width: "230px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: 1.5,
            "@media (min-width: 1250px)": {
              display: "none",
            },
            "&:before": {
              // eslint-disable-next-line quotes
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 15,
              width: 15,
              height: 15,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div>
          <div
            onClick={() => {}}
            className={`
            w-full
            h-full
            flex
            justify-start
            items-center
            text-end
            pl-[15px]
            pr-[10px]
            py-[10px]
            px-[10px]
            cursor-pointer
            `}
          >
            <span
              className={`
              text-base
              font-semibold
              ml-[10px]
              text-royalBlue
              `}
            >
              ME
            </span>
          </div>
          <Divider style={{ width: "230px" }} />
          <div
            onClick={() => {}}
            className={`
            w-full
            h-full
            flex
            justify-start
            items-center
            text-end
            pl-[15px]
            pr-[10px]
            py-[10px]
            px-[10px]
            cursor-pointer
            `}
          >
            <span
              className={`
              text-base
              font-semibold
              ml-[10px]
              text-royalBlue
              `}
            >
              PROJECTS
            </span>
          </div>
          <Divider />
          <div
            onClick={() => {}}
            className={`
            w-full
            h-full
            flex
            justify-start
            items-center
            text-end
            pl-[15px]
            pr-[10px]
            py-[10px]
            px-[10px]
            cursor-pointer
            `}
          >
            <span
              className={`
              text-base
              font-semibold
              ml-[10px]
              text-royalBlue
              `}
            >
              CERTIFICATES
            </span>
          </div>
          <Divider />
          <div
            onClick={() => {}}
            className={`
            w-full
            h-full
            flex
            justify-start
            items-center
            text-end
            pl-[15px]
            pr-[10px]
            py-[10px]
            px-[10px]
            cursor-pointer
            `}
          >
            <span
              className={`
              text-base
              font-semibold
              ml-[10px]
              text-royalBlue
              `}
            >
              WHY ME?
            </span>
          </div>
          <Divider />
          <div
            onClick={() => {}}
            className={`
            w-full
            h-full
            flex
            justify-start
            items-center
            text-end
            pl-[15px]
            pr-[10px]
            py-[10px]
            px-[10px]
            cursor-pointer
            `}
          >
            <span
              className={`
              text-base
              font-semibold
              ml-[10px]
              text-royalBlue
              `}
            >
              LETS TALK
            </span>
          </div>
        </div>
      </Menu>
    </div>
  );
};
