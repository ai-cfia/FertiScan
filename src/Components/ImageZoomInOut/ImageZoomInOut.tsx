import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import "./ImageZoomInOut.css";
import { useEffect } from "react";

interface ControlsProps {
  url: string;
}
const TransformControls = ({ url }: ControlsProps) => {
  const { resetTransform } = useControls();
  useEffect(() => {
    resetTransform();
    // eslint-disable-next-line
  }, [url]);
  return <></>;
};

interface ImageProps {
  imageUrl: string;
  className?: string; // Optional class name
  onClick?: () => void; // Optional click handler function
  alt?: string; // Optional alt text
}

function ImageZoomInOut({ imageUrl, alt }: ImageProps) {
  return (
    <TransformWrapper pinch={{ step: 1000 }}>
      {/* eslint-disable-next-line */}
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          {console.log(rest)}
          <TransformControls url={imageUrl} />
          <TransformComponent>
            <img src={imageUrl} alt={alt} className="test" />
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}

export default ImageZoomInOut;
