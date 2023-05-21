import React, { useEffect } from 'react';


const AboutUs = () => {
 

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-blue-950 to-sky-950 rounded-xl my-10">
      <div className="hero-content flex-col lg:flex-row">
        <img className="w-1/3" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/dc73plv-1d7fcca2-ee76-4a0f-8fa1-6850ebbcda19.png/v1/fill/w_600,h_1189/infinity_war_doctor_strange__2____png_by_captain_kingsman16_dc73plv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE4OSIsInBhdGgiOiJcL2ZcL2VhMTk2MTE3LTBiNjQtNDliNy1iMTNmLTc5ZjQzY2Y3N2U1M1wvZGM3M3Bsdi0xZDdmY2NhMi1lZTc2LTRhMGYtOGZhMS02ODUwZWJiY2RhMTkucG5nIiwid2lkdGgiOiI8PTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qKgL7JxOKienQM_wIy7UxmFFFZdy9QczPPVwloNONBo" alt="Image" />
        <div className="example-selector">
          <h1 className="text-5xl font-bold">About Us!</h1>
          <p className="py-6">At Toys World, we believe that every child deserves to experience the joy and wonder of play. We are an online marketplace dedicated to bringing smiles to children's faces by offering a wide selection of high-quality toys for all ages and interests.</p>
          <p className="mb-5">Our mission is to create a safe and enjoyable shopping experience for both parents and children. We carefully curate our toy collection to ensure that every product meets the highest standards of safety, durability, and educational value.</p>
          <button className="btn bg-sky-500 text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
