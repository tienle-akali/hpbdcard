"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BirthdayCard() {
  const searchParams = useSearchParams();

  const [autoplay, setAutoplay] = useState(false);

  const handleClickCard = () => setAutoplay(true);

  const openText = searchParams.get("openText") || "Click to open";
  const from = searchParams.get("from") || "";
  const scale = searchParams.get("scale") || 1;
  const ytb = searchParams.get("ytb") || "";

  const text = (
    <>
      Chúc mừng sinh nhật anh!
      <br />
      Em hiểu anh luôn gánh vác nhiều điều, nhưng hôm nay em mong anh dành chút
      thời gian cho bản thân cùng gia đình, tận hưởng khoảnh khắc bình yên anh
      nha.
      <br />
      Dù không ở gần, em vẫn luôn ở đây, lặng lẽ ủng hộ và tin tưởng vào anh!!
      <br />
      <div className="signature">{from}</div>
    </>
  );

  return (
    <>
      <div
        className="valentines-day-card"
        style={{
          transform: `scale(${scale})`,
        }}
        onClick={handleClickCard}
      >
        <input id="open" type="checkbox" />
        <label className="open" htmlFor="open"></label>
        <div className="card-front">
          <div className="note">{openText}</div>
        </div>
        <div className="card-inside">
          {/* <div className="text-one">Happy</div> */}
          <div className="text-script">{text}</div>
          {/* <div className="card-inside-heart">
            <div className="heart"></div>
            <div className="smile"></div>
            <div className="eyes"></div>
          </div> */}
          <div className="heart-wrapper">
            <div className="heart-container">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
      </div>
      {ytb && (
        <iframe
          style={{
            position: "absolute", // Ẩn nhưng vẫn giữ trong DOM
            top: "-9999px", // Đẩy iframe ra ngoài màn hình
            left: "-9999px",
            opacity: 0, // Hoặc dùng opacity để ẩn
            border: "none",
          }}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${ytb}?autoplay=${
            autoplay ? 1 : 0
          }`}
          title="YouTube video player"
          allow={`autoplay; encrypted-media`}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
}
