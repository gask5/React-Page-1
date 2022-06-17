const style={
      backgroundColor : "rgba(255,255,255,0.0)",
      textAlign: "center",
      padding: "0.5rem",
      borderRadius: "5px 5px 5px 5px",
      color: "#000000",
      padding:'5rem',
      fontSize: '1rem'
}

function Hello(props){
      return(
            <div style={style}><div style={{fontSize: '2em'}}>{props.text}</div></div>
      )
}

export default Hello;