import React from 'react';
import AppLayout from "../component/Layout/AppLayout.jsx";
import PageHeader from "../component/Layout/PageHeader.jsx";
import SidebarMenu from '../component/Tab/SideTab.jsx';
import UniversityAbout from '../component/Overview/UniversityAbout.jsx';


      
const OverviewPage = () => {

  const tabs = ['About University', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'];
  
  const preview = [
    {
      img:"https://res.cloudinary.com/dwcilnanz/image/upload/v1733841751/samples/coffee.jpg",
      tittle:"About Our Apparel Digital University",
      details:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
  ]

  
    return (
        <AppLayout>
            <PageHeader 
            text="OverView" 
            img="https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/468834161_10162581360433343_7065553219720575792_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHBoDwAsgqXQgGBDeq-MPC5fePgDyqrPEh94-APKqs8SCxUFUHkiUNr6XBillru80DnaR-cO78D7xy-gZlHv_eN&_nc_ohc=hHEzuVE59p0Q7kNvwGejiBi&_nc_oc=AdmIy3aneBnZIYvqM9YtdOhYuvBdkHFeAF5x-pIvxnWZW4H3sW6_gkxbBD0997drur0&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=W96xDtwB25pRSixmm9ng5A&oh=00_AfHJ3oAZxS3KXfRyx9MuLK38eTY8N3G-YraVRIY9DzETXQ&oe=6801B5A1" 
            />

            <div 
            className='my-[60px] container mx-auto lg:grid lg:grid-cols-4 gap-4'
            >
              <div className='col-span-1'>
                 <SidebarMenu tabs={tabs} path={"overview"} />
              </div>
              <div className='col-span-3 mt-4 lg:mt-0'>
                <UniversityAbout img={preview[0].img} tittle={preview[0].tittle} details={preview[0].details}/>
              </div>
            </div>
        </AppLayout>
        
    );
};

export default OverviewPage;