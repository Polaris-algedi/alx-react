import "./Header.css";
import schoolLogo from "../assets/holberton-logo.jpg";
/*
Images are not loading.
https://stackoverflow.com/questions/34582405/react-wont-load-local-images

When using Webpack you need to require images in order for Webpack
to process them, which would explain why external images load while
internal do not, so instead of <img src={"/images/resto.png"} />
you need to use <img src={require('/images/image-name.png')} />
replacing image-name.png with the correct image name for each of them.
That way Webpack is able to process and replace the source img.
*/
export default function Header() {
    return (
      <div className="App-header">
        <img src={schoolLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
    );
  }