import React,{useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        backgroundColor:"#f8f9fa",
        color:'black'
    })

    const [myBtnText, setMyBtnText] = useState("Enable Dark Mode")

    const InverseColor=()=>{
        if(myStyle.backgroundColor==='#f8f9fa'){
            setMyStyle({
                backgroundColor:"#343a40",
                color:'white'
            })
            setMyBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                backgroundColor:"#f8f9fa",
                color:'black'
            })
            setMyBtnText("Enable Dark Mode")
        }
    }

    return (
        <div style={myStyle} className='p-3 rounded'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptatibus nemo ab enim quo assumenda sit beatae praesentium eos accusantium qui ea consectetur, voluptatem provident unde adipisci nihil ipsam, deleniti fugit natus veniam consequuntur?<br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iste perspiciatis hic veritatis, fuga officia nobis ratione vel doloribus voluptates numquam sit atque voluptate, ab reprehenderit vitae earum dicta culpa consectetur, ad commodi saepe.</p>
        <button type="button" class="btn btn-primary" onClick={InverseColor}>{myBtnText}</button>
        </div>
    )
}
