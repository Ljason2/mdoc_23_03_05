import "../index.css"
import Header from "./Header"

function App({children}){
    return(
        
        <div id="wrap">
        <Header />
        <div>
        {children}
        </div>
        </div>
    )
}


export default App;