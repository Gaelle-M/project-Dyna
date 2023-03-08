import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Conditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className="conditions">
            <Navigation />
            <div className="container">
                <h2>Conditions d'utilisation</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia doloremque provident pariatur quis voluptates et deleniti fugiat incidunt repudiandae, fuga alias non numquam delectus quos labore voluptatum harum vel sed. Quia eum nihil veritatis rem nemo ipsam tenetur, error eius. Sed ex mollitia quisquam, totam nihil dolor accusamus quam aspernatur labore voluptatibus. Incidunt illo quas dolorem ut officia iste, minus corrupti tempora eos aliquam voluptatum. Cumque, eligendi voluptatibus tenetur dolores saepe officiis impedit ab at facere, quia hic modi, veniam odit deserunt. Debitis sit id rem repellendus consectetur nemo sint recusandae maxime voluptatum ea placeat at omnis cumque odio, temporibus voluptatibus expedita libero laboriosam dolorum, voluptates inventore eligendi tenetur sequi. Hic nesciunt sunt velit praesentium assumenda vel ipsam qui distinctio iste culpa earum quidem rerum quod mollitia exercitationem, perferendis repellat veniam atque! Atque sapiente quia iste dolorem qui provident quidem alias. Quibusdam fugiat doloribus harum facere, rerum dicta adipisci reprehenderit beatae excepturi omnis nam? Labore aspernatur maxime, ducimus, ex asperiores nihil quaerat veniam quibusdam nisi necessitatibus minus illo adipisci exercitationem.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta architecto maiores unde similique, molestiae ipsam fugit cumque ducimus, sapiente in blanditiis tempore culpa officiis saepe aliquid hic nihil? Dolorum libero a illo distinctio error eveniet inventore facilis, ex perferendis labore consequatur nemo eos explicabo nam totam voluptatum ut dicta saepe ea fuga dolore veritatis? Ratione amet ut error pariatur alias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, itaque distinctio. Sit voluptatum aut dolore tenetur, porro autem sunt et, perspiciatis debitis at explicabo corrupti, velit exercitationem recusandae nostrum. Omnis dignissimos ea cupiditate! Velit aspernatur maiores hic ducimus. Explicabo officia assumenda natus mollitia architecto veniam recusandae itaque corrupti! Ullam similique laborum illo ipsam ipsum cum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id quasi repellendus est voluptates eligendi at autem dolorem incidunt totam natus, amet atque, modi impedit recusandae? Voluptatum, dolorem. In cupiditate ea explicabo illum velit. Possimus labore eos reprehenderit nostrum ab officiis! Pariatur cumque accusantium dolore amet, aspernatur sapiente a obcaecati hic dignissimos provident sunt deleniti.</p>
            </div>
            <Footer/>
        </div>
    );
};

export default Conditions;