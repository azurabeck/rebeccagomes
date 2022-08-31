import Image from "next/image";
import imageImp from '../../src/assets/images/myimage.png'

function Contact({  }) {
  return (
    <div>
      <Image
        src={imageImp}
      />
    </div>
  );
}

export default Contact