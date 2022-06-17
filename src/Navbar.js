import NavButton from "./NavButton";

const topBar ={
      width:'90%',
      display: "flex",
      justifyContent: "space-between",
      position: "fixed",
      backdropFilter: "blur(5px)",
      zIndex: "2",

}

const buttons ={
      display: "flex",
}

function Navbar(){
      return (
            <div style={topBar}>
                        <div alt="Left">
                              <NavButton name="Lorem Ipsum"
                              style/>
                        </div>
                        <div style = {buttons}>
                              <NavButton name="Works" />
                              <NavButton name="About" />
                              <NavButton name="Contacts" />
                        </div>
            </div>
      );
}

export default Navbar;