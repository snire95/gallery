import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';
const ImageGrid = ({setSelectedImg}) => {
  const {docs} = useFirestore('images');
  const download = (url) => {
    var element = document.createElement("a");
    var file = new Blob(
      [
        url + ".png"
      ],
      { type: "image/*" }
    );
    console.log(url);
    element.href = URL.createObjectURL(file);
    element.download = "image.png";
    element.click();
  };
  console.log(docs);
  return (
    <div className="img-grid">
    {docs && docs.map(doc => (
      <div>
      <motion.div className = "img-wrap" key={doc.id} layout whileHover = {{opacity : 1}} onClick={() => setSelectedImg(doc.url)}>
        <motion.img src = {doc.url} alt = "uploaded pic" initial = {{opacity: 0}} animate = {{opacity : 1}} transition = {{delay : 1}}  />
      </motion.div>
       <motion.a  initial = {{opacity: 0}} animate = {{opacity : 1}} transition = {{delay : 1}} download  >
    <button class="btn" onClick = {() => download(doc.url) }  ><i class="fa fa-download"></i> Download</button></motion.a>
</div>
    ))}

   </div>
  )
}
export default ImageGrid;