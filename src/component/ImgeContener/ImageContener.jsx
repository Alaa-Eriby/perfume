import "./ImageContener.css";
import PerfumeImg from "../../../public/image/perfume.jpg";

function ImageContener(){

    return(
        <div id='imagediv'> 
       <img id="MyImg" src={PerfumeImg}></img>
        </div>
    );
}

export default ImageContener;