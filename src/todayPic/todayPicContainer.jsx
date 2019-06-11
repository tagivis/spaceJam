import  React, {Component} from "react";
import  axios  from "axios";
import TodayPicComponent from "./todayPicComponent";


const urlApod='https://api.nasa.gov/planetary/apod?api_key=gaAbODbeimgPyb3qKIhBGYTCIfaTwY3J5sVg2Che'

class TodayPicContainer extends Component{

    // state={
    //     key:'',
    //     id:'',
    //     date:'',
    //     explanation:'',
    //     hdurl:'',
    //     media_type:'',
    //     title:'',
    //     url:'' 
    //  }

    state={
        dayPicture: []
    }
    

    componentDidMount()
    {
        this.getApod();
    }

   async getApod()
    {
       try
       {
            const res = await axios.get(urlApod);
            this.setState({ dayPicture: res.data })     
        }
        catch(error)
        {
            console.log(error)
        }
    }



    render()
    {
        //console.log("Pictures", this.state.dayPicture);
        return(        
            <>
                <TodayPicComponent
                    id={this.state.dayPicture.date}
                    date={this.state.dayPicture.date}
                    explanation={this.state.dayPicture.explanation}
                    hdurl= {this.state.dayPicture.hdurl}
                    media_type ={this.state.dayPicture.media_type}
                    title= {this.state.dayPicture.title}
                    url= {this.state.dayPicture.url}
                    />
            </>
        
        );
    }
}
export default TodayPicContainer;