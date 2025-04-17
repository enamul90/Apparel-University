import React from 'react';

const AboutMap = () => {
    return (
        <div className=' w-full h-[400px]'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15803.327621448974!2d90.4110305408686!3d22.16345250391863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aae9006b83359f%3A0xdd3d34df2b986c4e!2z4KaG4Kao4Ka44Ka-4KawIOCmuOCmv-CmleCmpuCmvuCmsCDgpqbgp4vgppXgpr7gpqg!5e1!3m2!1sen!2sbd!4v1744825227352!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      );
};

export default AboutMap;