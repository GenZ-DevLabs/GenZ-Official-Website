import React from "react";
import { Link } from "@mui/material";
import WhatsAppLogo from "../assets/whatsapp.png";

export default function WhatsappWidget() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        marginBottom: 50,
        marginRight: 50,
        width: 64,
        height: 64,
      }}
    >
      <Link
        href="https://wa.me/94701765144"
        target="_blank"
        rel="noreferrer"
        underline="none"
      >
        <img
          src={WhatsAppLogo}
          alt="whatsapp"
          style={{ width: 64, height: 64 }}
        />
      </Link>
    </div>
  );
}
