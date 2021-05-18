import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';
const ImageGrid = ({setSelectedImg}) => {
 const {docs} = useFirestore('images');
 console.log(docs);
 return (
   <div className="img-grid">
    {docs && docs.map(doc => (
      <div>
     <motion.div className = "img-wrap" key={doc.id} layout whileHover = {{opacity : 1}} onClick={() => setSelectedImg(doc.url)}>
      <motion.img src = {doc.url} alt = "uploaded pic" initial = {{opacity: 0}} animate = {{opacity : 1}} transition = {{delay : 1}}  />
      
   
     </motion.div>
     <a href={doc.url} download="filename">
    <button class="btn"><i class="fa fa-download"></i> Download</button></a>

  {/* <a href={doc.url} target="_blank">Download</a> */}

</div>
    ))}

   </div>
  )
}
export default ImageGrid;