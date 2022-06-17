

function NavButton(props){
      return(
            <div style={{
                  position: "relative",
                  margin: "1rem",
                  transition: "1s",
                  zIndex:"1",
                  borderRadius: '0.5rem',
            }}>{props.name}</div>
      );
}

export default NavButton;