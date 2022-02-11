import React from "react";
import Card from "./Card";

const MasterCard = () => {
  const cards = [
    {
      subtitle: "Last-minute gift? You're just in time.",
      title: "Valentine's Day",
      img: "https://www.att.com/idpassets/sales/uf/gift-ideas/valentines-day/2022/857450-rivercard-dsk-valentines-airpods-pro-retina.jpg",
    },
    {
      title: "iPhone 12",
      subtitle: "Megapower Mini sized.",
      img: "https://i2.wp.com/www.realmicentral.com/wp-content/uploads/2021/09/iPhone-13-Pro-Teardown.png?fit=1250%2C750&ssl=1",
    },
    {
      title: "Shoot on iphone call for entires",
      subtitle: "Submit your best macro photos by february 16.",
      img: "https://gohustl.co/wp-content/uploads/2020/11/linda-xu-iMf7bvcIIog-unsplash1.jpg",
    },
    {
      title: "Give more to your heart.",
      subtitle: "Give upto $235 with extra saving",
      img: "https://9to5mac.com/wp-content/uploads/sites/6/2020/10/What-Apple-Watch-Should-You-Buy-Series-3-SE-and-Series-6.jpg?quality=82&strip=all&w=1600",
    },
  ];

  return (
    <div id="mainDiv">
      {cards.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default MasterCard;
