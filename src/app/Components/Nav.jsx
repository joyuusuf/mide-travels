"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    FaPhone, FaEnvelope, FaUser, FaBars, FaTimes, 
} from "@fortawesome/free-solid-svg-icons"

import {faFacebook, faFlicker} from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { useState } from "react";


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div>Nav</div>
  )
}

