import React from "react"
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi"
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "cars",
    url: "/products",
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "At Radoni Auto, our mission is simple: to provide quality vehicles, exceptional service, and unbeatable value. We are committed to exceeding customer expectations, fostering trust, and making every automotive experience a positive one. With integrity as our cornerstone, we aim to be the premier destination for all automotive needs.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to redefine the automotive industry through innovation, sustainability, and customer-centric solutions. We aspire to lead the way in adopting cutting-edge technologies that enhance the driving experience while minimizing our environmental footprint. Our ultimate goal is to inspire a new era of mobility that prioritizes efficiency, safety, and convenience for all.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Shkelzen Radoni, the visionary behind Radoni Auto, embarked on a journey driven by a passion for cars and a dedication to customer service. With a keen eye for quality and a relentless pursuit of excellence, Shkelzen has guided the company from its inception to its current status as a respected leader in the automotive industry. His unwavering commitment to integrity, innovation, and customer satisfaction continues to shape the legacy of Radoni Auto.",
  },
]

// export const products_url = 'https://www.course-api.com/react-store-products';
export const products_url = "/.netlify/functions/products"

//export const single_product_url = `https://www.course-api.com/react-store-single-product?id=`
export const single_product_url = `/.netlify/functions/single-product?id=`
