import axios from "axios";
// import { Puf } from 'react-loader-spinner'
import { ColorRing, Puff } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

    const Phones = () => {
        const [phone, setPhone] = useState([])
        const [load, setLoad] = useState(true)


        useEffect(() => {
            // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
            // .then(res => res.json())
            // .then(data => setPhone(data.data))
            axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const datas = data.data.data;
                const phoneWithFakeData = datas.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1]),
                        image: phone.image
                    }
                    return obj;
                })
                console.log(phoneWithFakeData);
                setPhone(phoneWithFakeData)
                setLoad(false)
            })
        },[])
        

    return (
        
          
        
        <div>
            {
                load &&  <div>
                    <Puff
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                
                />
                <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
                </div>
                
            }
            <div className="text-5xl">The length is: {phone.length}</div>
            <render></render>
            <BarChart width={2000} height={600} data={phone}>
                <YAxis dataKey={'price'}></YAxis>
                <XAxis dataKey={'name'}></XAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={'price'} fill="#8884d8"></Bar>
            </BarChart>
            
        </div>
    );
};

export default Phones;