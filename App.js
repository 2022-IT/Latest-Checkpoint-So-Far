import Bio from "./Profile/Bio";
import FullName from "./Profile/FullName";
import Profession from "./Profile/Profession";

function App() {
  return (
    <div className="App" style={{display:'flex',justifyContent:'center',marginTop:'1.6cm',justifyContent:'spaceEvenly'}}>
      <FullName name='Mourad Chebbi' func={()=> alert('My name is Mourad Chebbi')} />
      <Bio>
      <h3>Hello I am a Full Stack Js Student</h3>
      <img style={{width:'4.4cm',height:'4.4cm'}} src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/316170784_113055101624715_3892052435912447050_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=rrCxlbdnE1UAX9gawiT&_nc_ht=scontent.ftun16-1.fna&oh=00_AfDiNRPeUgoIn1UhzJOLswOZmB5GEUmNdkq1R00nwF_dnA&oe=63A14C54"/>
      </Bio>
      <Profession profession='I am a self-employed person working in the food packaging industry'/>
    </div>
  );
}

export default App;
