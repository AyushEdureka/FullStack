import React, {Component} from "react";

class UserProfile extends Component{
   
         constructor(props){   //props - properties
                               
          super(props);  //Super() it allows you to use propesties of parent class
          
          //Intializing the state
          this.state = {
            name:'Felix',
            email: 'Felix@exaple.com',
            profilePicture:'https://th.bing.com/th/id/OIP.JBpgUJhTt8cI2V05-Uf53AHaG1?w=217&h=201&c=7&r=0&o=5&pid=1.7',
          };
         }

         render(){
            const {name,email,profilePicture} = this.state;
         

         return(
            <div style={styles.container}>
                <img src={profilePicture} alt="Profile" style={styles.image} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
         )

        }


}

const styles = {

    container:{
        width:'250px',
        margin:'50px',
        padding:'20px',
        border:'1px solide black',
        borderRadius:'10px',
        textAlign:'center',
        boxShadow:'0 2px 5px rgba(0,0,0,0.4)',
    },

    image:{
        width:'150px',
        height:'150px',
        borderRadius:'50%',
        marginBottom:'15px'
    },

};

export default UserProfile;