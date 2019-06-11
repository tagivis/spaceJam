import  React, {Component} from "react";
import  axios  from "axios";
import BlueMarbleComponent from "./blueMarbleComponent";


const urlEpic='https://epic.gsfc.nasa.gov/api/natural'
const urlEpicPics='https://epic.gsfc.nasa.gov/archive/natural/'

class BlueMarbleContainer extends Component{

    state={
        blueMarblePics: []
    }
    

    componentDidMount()
    {
        this.getEpic();
    }

   async getEpic()
    {
       try
       {
            const res = await axios.get(urlEpic);
            //console.log(res.data);
            
            this.setState({ blueMarblePics: res.data })     
        }
        catch(error)
        {
            console.log(error)
        }
    }



    render()
    {
        console.log("Blue Marble", this.state.blueMarblePics);
        return(        
            <>
            {
                this.state.blueMarblePics.map(blueMarblePic => {
                    return(
                    <BlueMarbleComponent
                        key={blueMarblePic.identifier}
                        id={blueMarblePic.identifier}
                        year ={blueMarblePic.identifier.substr(0,4)}
                        month={blueMarblePic.identifier.substr(4,2)}
                        day={blueMarblePic.identifier.substr(6,2)}                        
                        image= {blueMarblePic.image}
                        urlImage={urlEpicPics+blueMarblePic.identifier.substr(0,4)+'/'+
                        blueMarblePic.identifier.substr(4,2)+'/'+
                        blueMarblePic.identifier.substr(6,2)+'/png/'+blueMarblePic.image+'.png'}
                        />)
                })
            }
            </>
        
        );
    }
}
export default BlueMarbleContainer;