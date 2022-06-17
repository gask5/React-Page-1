const header1 ={
      textDecorationColor: 'rgba(155,255,155,0.5)',
}

const header2 ={
      textDecorationColor: 'rgba(255,155,255,0.5)',
}

const imgStyle = {
      minWidth: '10rem',
      maxWidth: '25rem'
}

const paragraphStyle = {
      width: '100%',
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: '10vw',
}


function Paragraph(props){

      var header;
      if(props.header1 != null) header = <h1 style={header1}>{props.header1}</h1>;
      if(props.header2 != null) header = <h2 style={header2}>{props.header2}</h2>;
      if(props.header3 != null) header = <h3 style={header2}>{props.header3}</h3>;

      return (
            <div style={paragraphStyle}>
                  <img style = {imgStyle} src={props.img}/>
                  <p style={{textAlign: "left",maxWidth: '25rem', margin:'2.5rem'}}>{header}{props.text}</p>
            </div>
      );
}

export default Paragraph;