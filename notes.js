// 1. set count and increament and decreament

        const [count,setCount]=useState(0);

        function decrease(){
            setCount(count-1);
        }

        function increase(){
            setCount((count)=>count+1);
            setCount((count)=>count+1);
            setCount((count)=>count+1);

        }

//2.change text using UseState

        let texts =["Earn","Grow","Save"];

        const [text,setText]=useState("Earn");

        function changeText(){
            let randomIndex = Math.floor(Math.random()*(texts.length))
            setText(texts[randomIndex])
        }


            
            
           

           