import { FunctionComponent, useEffect, useState } from "react";

interface BannerImageProps {
  src?: string;
  distance?: number;
}

const BannerImage: FunctionComponent<BannerImageProps> = ({
  src,
  distance = 0,
}) => {
  const [scale, setScale] = useState<number>();
  const [dim, setDim] = useState<number>();

  function mapToSmoothValue(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
  ): number {
    const fromRange = fromHigh - fromLow;
    const toRange = toHigh - toLow;
    const ratio = toRange / fromRange;
    const adjustedValue = value - fromLow;
    const mappedValue = adjustedValue * ratio + toLow;
    const smoothValue = Math.round(mappedValue * 100) / 100;
    return smoothValue;
  }

  useEffect(() => {
    let scaleByDistance = 1;
    let dimByDistance = 0;
    if (distance) {
      if (distance > 0) {
        scaleByDistance = mapToSmoothValue(-distance, 0, -500, 1, 1.5);
        dimByDistance = mapToSmoothValue(-distance, 0, -500, 0, 10);
      }
    }
    setScale(scaleByDistance);
    setDim(dimByDistance);
  }, [distance]);

  return (
    <>
      <img
        style={{
          width: "105%",
          height: "70%",
          objectFit: "cover",
          position: "fixed",
          overflowX: "hidden",
          overflowY: "hidden",
          zIndex: -1,
          transform: "translate(-5%, -5%)",
          scale: `${scale}`,
          filter: `blur(${dim}px)`,
        }}
        src={src}
        alt="banner"
      />
      <div
        style={{
          width: "105%",
          height: "70%",
          objectFit: "cover",
          position: "fixed",
          overflowX: "hidden",
          overflowY: "hidden",
          zIndex: -1,
          transform: "translate(-5%, -5%)",
          scale: `${scale}`,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 95%)",
        }}
      />
    </>
  );
};

export default BannerImage;
