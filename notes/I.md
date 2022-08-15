


-vickyp.dev


{/* <img
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/320px-Bananas.svg.png"
  title="/Home"
  alt="nav home"
  className="navIconImg"
/> */}


            

{items.map(item => (
   <motion.li layout>
      {item.name}
      {item.isSelected && <motion.div layoutId="underline" />}
   </motion.li>
))}





