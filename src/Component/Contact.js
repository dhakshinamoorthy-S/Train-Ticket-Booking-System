import React from 'react'

export default function Contact() {
  return (
    <div id="co"><h1 id="co1">Contact</h1>
    <form id="co2">
    <br></br><br></br><br></br>
    <label id="co3">Name  : </label>
    <input type='text' id="co3" placeholder='Enter your Name'></input><br></br>
    <br></br><br></br>
    <label id="co3">Text Message : </label>
    
    <input type='textarea'  id="co3" placeholder='type your here'></input><br></br>
    
    <h1>Passenger care-no  :        0456-8934930804</h1>
    <button id="co6">submit</button>
    </form>

  <a href='https://instagram.com/dhakskavin?igshid=MzRlODBiNWFlZA=='><img id="co4" src='https://w7.pngwing.com/pngs/5/164/png-transparent-instagram-icon-thepix-digital-marketing-logo-shiftdelete-instagram-logo-miscellaneous-rectangle-magenta-thumbnail.png'></img></a>
  <br></br><br></br>
  <a href='https://www.facebook.com/dhaks.kavin?mibextid=ZbWKwL'><img id="co5" src='data:image/png;base64,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'></img></a>
  <div>
  <a href='/Home'><img  id="pic8" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPalrDNnb3tSfDVzPUiS2fO0vXPN4T0bjhl7KG_e2cZAsjeQq&s'></img> </a>
</div>
  </div>
  )
}
