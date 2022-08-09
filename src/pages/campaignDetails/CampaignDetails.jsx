import React from 'react'
import "./campaignDetails.css";
import cmpDetails1 from "../../assets/images/campaign/landscp.svg";
import fbLogo from "../../assets/images/campaign/fb-logo-1.svg";
import inLogo from "../../assets/images/campaign/in-logo-1.svg";
import twitterLogo from "../../assets/images/campaign/twitter-logo-1.svg";
import redLogo from "../../assets/images/campaign/red-logo.svg";


const CampaignDetails = ()=> {
  const campaignData = [
    // {
    //     maimTitle:'MEDIA UPDATES'
    // } ,
    {
        title: 'The Hindu',
        content:'Scrap ‘Disastrous’ Arunachal mega dam project, say activists',
    },
    {
        title: 'Green Minute',
        content:'Dibang Valley’s nemesis - Forest Advisory sub committee ignores all tenets of conservation in Etalin Hydel Project',
    },
    {
        title: 'The Indian Express',
        content:'Wildlife institute all for hydel project in Arunachal tiger zone',
    },
    {
        title: 'Hindustan Times',
        content:'Forest panel to share its viesws on Etalin Hydropower Project soon',
    },
    {
        title: 'The Hindu',
        content:'Scrap ‘Disastrous’ Arunachal mega dam project, say activists',
    },
    {
        title: 'Green Minute',
        content:'Dibang Valley’s nemesis - Forest Advisory sub committee ignores all tenets of conservation in Etalin Hydel Project',
    },
    {
        title: 'The Indian Express',
        content:'Wildlife institute all for hydel project in Arunachal tiger zone',
    },
    {
        title: 'Hindustan Times',
        content:'Forest panel to share its viesws on Etalin Hydropower Project soon',
    },
    {
        title: 'The Hindu',
        content:'Scrap ‘Disastrous’ Arunachal mega dam project, say activists',
    },
    {
        title: 'Green Minute',
        content:'Dibang Valley’s nemesis - Forest Advisory sub committee ignores all tenets of conservation in Etalin Hydel Project',
    },
    {
        title: 'The Indian Express',
        content:'Wildlife institute all for hydel project in Arunachal tiger zone',
    },
    {
        title: 'Hindustan Times',
        content:'Forest panel to share its viesws on Etalin Hydropower Project soon',
    },
  ]
 console.log(campaignData);
  return (
    <div className='campaign-details-wrapper'>
      <section className="campaign-section-1">
        <div  className="sub-campaign-section-1">
          <div className="title-setion">
            <h1>
              Dibang Valley Must Be Saved from Destruction — Act Now!
            </h1>
            <p>
              One of the most biodiverse zones in the Arunachal Pradesh is under serious threat. Dibang Valley is   part of the Eastern Himalaya Global Biodiversity Hotspot. 
              The attached gallery showcases some of the species in the valley.
            </p>
            <span>Nandini Velho and Umesh Srinivasan</span>
          </div>
          <div className="img-section">
            <img className='action' src={cmpDetails1} alt="Google" width="500"/>
          </div>
        </div>
      </section >

      <section  className='campaign-section-2'>
        <div className=" content sub-section-1">
          <p><img className='action' src={fbLogo} alt="Google" width="48"/></p>
          <p><img className='action' src={inLogo} alt="Google" width="48"/></p>
          <p><img className='action' src={twitterLogo} alt="Google" width="48"/></p>
        </div>
        <div className= "content sub-section-2">
          <div className="sub-content">
            <p>
              The proposal for the Etalin Hydro-Electric Project (3097 MW) in Arunachal Pradesh’s Dibang Valley (RO/Ministry File Number F. No. 8-20/2014-FC), was placed for approval before the Forest Advisory Committee (FAC) on the 23rd of April, 2020. Reports state that 2.7 lakh forest trees will be felled in the process. Long-term research in Dibang Valley (including areas which will see impacts of the proposed hydro-project) show that the region is crucial habitat for many Schedule I endangered species, including a genetically distinct population of tigers.
            </p> 
            <p>
              If you would like to urge the FAC to save Dibang Valley, please add your signature to the letter below (content at the end of this article), requesting that the FAC reject the proposal. All signatures collected will be collated and sent as part of a Conservation India memo to FAC members viz. Additional Director General of Forests (Forest Conservation – adgfc-mef@nic.in), Directory General of Forests (dgfindia@nic.in), Inspector General of Forests (Forest Conservation – igfc-mef@nic.in), Dr. Kaushal Rajesh (kaushalrajesh1@rediffmail.com) and Shri. Suramya Vora (suramya.vora@gmail.com).
            </p>
          </div>
          <div className="box">
            <div className="image">
              <img className='action' src={redLogo} alt="Google" width="48"/>
            </div>
            <div className="box-content">
              <p>
                This campaign is now closed for signatures. Over 4600 people supported the campaign. Thank you for your interest and support.
              </p>
              <p>You can visit this page for ongoing updates on this issue.</p>
            </div>
          </div>
          <div className="sub-content">
              <p>
                Dibang Valley, in Arunachal Pradesh, forms part of the Eastern Himalaya Global Biodiversity Hotspot, one of the 36 such global biodiversity hotspots across the world that contain 60% of the planet’s faunal diversity. Research reveals a unique relationship between tigers and Dibang’s Idu Mishmi people that helps protects their forests.
              </p>

              <p>See a gallery of the spectacular biodiversity of the Dibang Valley below. </p>

              <p>
                In addition to tigers, the greater region of Dibang Valley harbours more than 75 species of mammals including Clouded leopard, Asiatic Golden Cat, Asiatic Wild Dog, Red Panda, Mishmi Takin, Red Goral, and Gongshan Muntjac.
              </p> 

              <p>
                Rapid bird assessments in the region have estimated upwards of 300 species, including rare, endemic and endangered species such as the Blyth’s Tragopan, Sclater’s Monal, Rufous-necked Hornbill, Ward’s Trogon, Hodgson’s Frogmouth, Beautiful Nuthatch, Wedge-billed Babbler and the recently discovered Mishmi Wren-babbler. 43 species of amphibians have been recently recorded from the area, many of which are new discoveries.
              </p>

              The project will remove over 2.7 lakh trees from dense tropical forest, which cannot be compensated through afforestation.

              <p>
                There is consensus amongst scientists that the rise in zoonotic diseases (such as COVID-19) and acceleration of climate change is linked to biodiversity and forest destruction.
              </p>
          </div>
          <div className="sub-content latter">
            <h1>
              Letter to the Forest Advisory Committee members
            </h1>
              <p>Sub: Arunachal Pradesh’s Dibang Valley Must Be Saved from Destruction</p>

              <p>
                The proposal for the Etalin Hydro-Electric Project (3097 MW) in Arunachal Pradesh’s Dibang Valley (RO/Ministry File Number F. No. 8-20/2014-FC), was placed for approval before the Forest Advisory Committee on the 23rd of April, 2020. Long-term research in Dibang Valley (including areas which will see impacts of the proposed hydro-project) show that the region is a very important habitat for many Schedule I endangered species, including a genetically distinct population of tigers, 75 species of other mammals and over 300 species of birds.
              </p> 

              <p>
                The proposed hydro-electric project is, in my opinion, detrimental to India’s biodiversity and ecological security, and therefore I respectfully request that the FAC reject it.
              </p>  

              <p>Yours truly,</p>
              <p>The undersigned</p>

          </div>
          <div className="viewpoints sub-content">
            <p>
              While there are multiple local viewpoints about the dams in Dibang valley, this campaign simply seeks to highlight the loss of exceptional biodiversity that could result from the construction of the dam.
            </p>
          </div>
        </div>
        <div className="sub-section-3">
          <div className="editorial">
          {
            // campaignData?.map((elem)=>{
            //   console.log(elem);
            // })
            // campaignData?.map((elem,index)=>{
            //   return (
            //     <>
            //     {/* <h1>{index === 0 ? elem?.maimTitle : ''}</h1>
            //     <div className="editorial-content">
            //       <h3>{elem?.title || ''}</h3>
            //       <p>{elem?.content || ''}</p>
            //     </div> */}
            //     </>
            //   )
            // })
          }

          </div>
        </div>

      </section>
    </div>
  )
}

export default CampaignDetails