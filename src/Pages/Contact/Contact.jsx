
import './Contact.css'
import logo from '../../assets/logo.jpg'
import { useState } from 'react'
import axios from 'axios';

function Contact() {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [loading,setloading] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
    
        // Faqat raqamlar va "+" belgisi qabul qilinadi
        if (/^[0-9+]*$/.test(value)) {
          setPhone(value);
          setError("");
    
          // Minimal va maksimal uzunlik shartlari
          if (value.length < 9 || value.length > 15) {
            setError("Telefon raqam uzunligi 9-15 belgidan iborat bo'lishi kerak.");
          }
        } else {
          setError("Faqat raqamlar yoki '+' belgisini kiriting.");
        }
      };
    /////////////
    const sendMessage = (e)=>{
        setloading(true);
        e.preventDefault();
        if (!error && phone.length >= 9 && phone.length <= 15) {
            alert(`Telefon raqamingiz: ${phone}`);
          } else {
            alert("Iltimos, to'g'ri telefon raqamini kiriting.");
          }
        const token =  "7067329402:AAEGunIJCoHOAJ1uF_oNy80ya2HbKsMJvgA";''
    const id = -1002022260815;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const tel = document.getElementById("tel").value;
    const day = document.getElementById("day").value;
    const kurs = document.getElementById("kurs").value;
    const textContent = `Ism: ${name} \n Familiya: ${surname} \n Telefon_raqami: ${tel} \n Kun: ${day} \n Kurs: ${kurs}`
    axios({
        url:url,
        method:'POST',
        data:{
            "chat_id":id,
            "text":textContent,
        }
    })
    .then((res)=>{
        document.getElementById("form").reset();
        alert("Yuborildi")
    })
    .catch((error)=>{
        console.log("yuborilmadi");
    })
    .finally(() =>{
        setloading(false)
    })
    }
  return (
    <>
    <div className='contact'>
        <div className='container contact__container'>
            <form className='contact__form' id="form" onSubmit={sendMessage}>
            <img src={logo} alt="logo" className='logo'/><br />
            <h1 className='contact__title'>Aniq fanlar bilan aniq natijalar sari boring</h1><br />
                <input type="text" id='name' placeholder='Ism' required/><br />
                <input type="text" id='surname' placeholder='Familiya' required/><br />
               
                <input type="text" id='tel' value={phone} onChange={handleChange} placeholder='+998' required/><br />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <select id="kurs" required>
                    <option value="">Kursni tanlang</option>
                    <option value="math">Asosiy matematika</option>
                    <option value="fizika">Fizika</option>
                    <option value="math">Milliy sertifikat(matematika)</option>
                    <option value="fiziak">Milliy sertifikat(fizika)</option>
                </select><br />
                <select id="day" required>
                    <option value="">O'zingizga qulay kunlarni tanlang</option>
                    <option value="juft">Juft kunlari</option>
                    <option value="toq">Toq kunlari</option>
                </select><br />
                <button className='contact__btn' type="submit" loading={loading}>{loading? "yuborilmoqda..." : "Yuborish"}</button>
            </form>
        </div>
    </div>
     
    </>
  )
}

export default Contact
