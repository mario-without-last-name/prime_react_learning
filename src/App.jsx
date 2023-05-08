import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Color Theme   npm i primereact --save
import "primereact/resources/primereact.min.css"; // Prime React code   npm i primereact --save
import "primeflex/primeflex.css"; // className css   npm install primeflex --save
import "primeicons/primeicons.css"; // some icons   npm install primeicons --save
import { useState } from "react";

// For The Table
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";

// For The Password
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";

// For The Calendar
import { Calendar } from "primereact/calendar";

// For The InputMask
import { InputMask } from "primereact/inputmask";

// For The Color Picker
import { ColorPicker } from "primereact/colorpicker";

// For The PopUp Dialog
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

// For the Paginator
import { Paginator } from "primereact/paginator";

// For the Slider Input
import { Slider } from "primereact/slider";

// For the RichText Input
import { Editor } from 'primereact/editor'; //This requires   npm install quill

// For the Panel
import { Panel } from "primereact/panel";

function App() {

  // For The table
  const [filters, setFilters] = useState({global: {value: null, matchMode: FilterMatchMode.CONTAINS,},})
  const students = [
    { id: 1, name: "John", age: 25, city: "New York" },
    { id: 2, name: "Jane", age: 10, city: "London" },
    { id: 3, name: "Mary", age: 48, city: "Indonesia" },
    { id: 4, name: "Mike", age: 32, city: "Los Angeles" },
    { id: 5, name: "Sarah", age: 27, city: "Chicago" },
    { id: 6, name: "Tom", age: 42, city: "San Francisco" },
    { id: 7, name: "Emily", age: 18, city: "Sydney" },
    { id: 8, name: "David", age: 55, city: "Paris" },
    { id: 9, name: "Karen", age: 29, city: "Toronto" },
    { id: 10, name: "Eric", age: 37, city: "Berlin" },
    { id: 11, name: "Olivia", age: 24, city: "Barcelona" },
    { id: 12, name: "Benjamin", age: 50, city: "Tokyo" },
    { id: 13, name: "Julia", age: 21, city: "Seoul" },
    { id: 14, name: "Mark", age: 44, city: "Hong Kong" },
    { id: 15, name: "Anna", age: 31, city: "New Delhi" },
    { id: 16, name: "Joshua", age: 28, city: "São Paulo" },
    { id: 17, name: "Maggie", age: 36, city: "Mumbai" },
    { id: 18, name: "Lucas", age: 19, city: "Moscow" },
    { id: 19, name: "Natalie", age: 46, city: "Shanghai" },
    { id: 20, name: "Ethan", age: 23, city: "Beijing" },
    { id: 21, name: "Sophie", age: 30, city: "Athens" },
    { id: 22, name: "Jacob", age: 38, city: "Rome" },
    { id: 23, name: "Chloe", age: 26, city: "Rio de Janeiro" },
    { id: 24, name: "Matthew", age: 52, city: "Cape Town" },
    { id: 25, name: "Isabella", age: 33, city: "Dubai" },
    { id: 26, name: "Christopher", age: 40, city: "Vienna" },
    { id: 27, name: "Madison", age: 22, city: "Oslo" },
    { id: 28, name: "William", age: 47, city: "Stockholm" },
    { id: 29, name: "Emma", age: 25, city: "Helsinki" },
    { id: 30, name: "Nicholas", age: 35, city: "Amsterdam" },
    { id: 31, name: "Ava", age: 20, city: "Brussels" },
    { id: 32, name: "Andrew", age: 43, city: "Copenhagen" },
    { id: 33, name: "Grace", age: 39, city: "Dublin" },
    { id: 34, name: "Tyler", age: 29, city: "Edinburgh" },
    { id: 35, name: "Lily", age: 28, city: "Hong Kong" },
    { id: 36, name: "Brandon", age: 31, city: "Wellington" },
    { id: 37, name: "Hannah", age: 24, city: "Sydney" },
    { id: 38, name: "Dylan", age: 27, city: "Melbourne" },
    { id: 39, name: "Avery", age: 19, city: "Perth" },
    { id: 40, name: "Logan", age: 34, city: "Adelaide" },
    { id: 41, name: "Kayla", age: 22, city: "Brisbane" },
    { id: 42, name: "Caleb", age: 26, city: "Auckland" },
    { id: 43, name: "Mia", age: 29, city: "Wellington" },
    { id: 44, name: "Elijah", age: 32, city: "Christchurch" },
    { id: 45, name: "Aaliyah", age: 21, city: "Queenstown" },
    { id: 46, name: "Mason", age: 25, city: "Hamilton" },
    { id: 47, name: "Aria", age: 28, city: "Sydney" },
    { id: 48, name: "Evelyn", age: 33, city: "Melbourne" },
    { id: 49, name: "Noah", age: 30, city: "Brisbane" },
    { id: 50, name: "Mila", age: 23, city: "Perth" },
    { id: 51, name: "Liam", age: 35, city: "Auckland" },
    { id: 52, name: "Sophia", age: 26, city: "Wellington" },
    { id: 53, name: "Harper", age: 20, city: "Christchurch" },
    { id: 54, name: "Jackson", age: 28, city: "Hamilton" },
    { id: 55, name: "Charlotte", age: 24, city: "Sydney" }
  ]

  // For The password
  const header = <h4>Make a strong password</h4>
  const footer = (
    <>
      <Divider />
      <p className='mt-2'>Suggestions:</p>
      <ul className="pl-2 ml-2 mt-0 style={{lineHeight: '1.5'}}">
        <li>At least 1 lowercase</li>
        <li>At least 1 uppercase</li>
        <li>At least 1 number</li>
        <li>At least 1 special character</li>
        <li>At least 12 characters</li>
      </ul>
    </>
  )

  // For The Calendar
  const [date1, setDate1] = useState(null);
  const [dateRange, setDateRange] = useState(null);
  const [dateWithTime, setDateWithTime] = useState(null);
  const [date2, setDate2] = useState(null);

  // For the InputMask
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);

  // For The Color Picker
  const [color1, setColor1] = useState("000000");
  const [color2, setColor2] = useState({r:0,g:0,b:0});

  // For The PopUp Dialog
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  // For the Paginator
  const [first, setFirst] = useState(0); // 0  --> start on 1st page, 2 --> start on 3rd page, etc.
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const furnitures = [
    { id: 1, name: "Red Stool", qty: 165, price: 34 },
    { id: 2, name: "Blue Sofa", qty: 82, price: 525 },
    { id: 3, name: "Wooden Coffee Table", qty: 123, price: 199 },
    { id: 4, name: "Leather Recliner", qty: 47, price: 899 },
    { id: 5, name: "White Bookshelf", qty: 256, price: 129 },
    { id: 6, name: "Glass Dining Table", qty: 31, price: 699 },
    { id: 7, name: "Black Leather Ottoman", qty: 92, price: 299 },
    { id: 8, name: "Gray Sectional Sofa", qty: 76, price: 799 },
    { id: 9, name: "Round Wooden End Table", qty: 112, price: 79 },
    { id: 10, name: "Vintage Writing Desk", qty: 18, price: 449 },
    { id: 11, name: "Yellow Accent Chair", qty: 51, price: 249 },
    { id: 12, name: "Tufted Velvet Loveseat", qty: 67, price: 699 },
    { id: 13, name: "Rustic Wooden Bench", qty: 87, price: 179 },
    { id: 14, name: "Navy Blue Armchair", qty: 28, price: 429 },
    { id: 15, name: "Metallic Side Table", qty: 104, price: 89 },
  ]

  // For the Slider Input
  const [sliderValue1, setSliderValue1] = useState(null);
  const [sliderValue2, setSliderValue2] = useState(50);
  const [sliderValue3, setSliderValue3] = useState(7.50);
  const [sliderValue4, setSliderValue4] = useState([60, 80]);
  const [sliderValue5, setSliderValue5] = useState(0);

  // For the RichText Input
  const [richTextValue1, setRichTextValue1] = useState("");
  const [richTextValue2, setRichTextValue2] = useState("");
  const renderCustomToolbar = () => {
    return (
      <span className='ql-formats'>
        <button className='ql-bold' aria-label="Bold"/>
        <button className='ql-italic' aria-label="Italic"/>
        <button className='ql-underline' aria-label="Underline"/>
      </span>
    )
  }
  const renderCustomToolbarVariable = renderCustomToolbar(); // Not sure why f

  // For the Panel
  const IndonesianText = {
    dataPermohonan: "Menu Tab 1",
    dataPerusahaan: "Menu Tab 2",
    dataPersyaratan: "Menu Tab 3",
    dataLabelBeras: "Menu Tab 4",
    dataPermohonanContent: "Displaying Menu 1 Contents",
    dataPerusahaanContent: "Displaying Menu 2 Contents",
    dataPersyaratanContent: "Displaying Menu 3 Contents",
    dataLabelBerasContent: "Displaying Menu 4 Contents"
  };
  const [activeButton, setActiveButton] = useState(IndonesianText.dataPermohonan);
  const handleButtonClick = (value) => {
    setActiveButton(value);
  };
  function activeButtonContent() {
    switch (activeButton) {
      case IndonesianText.dataPermohonan:
        return IndonesianText.dataPermohonanContent;
      case IndonesianText.dataPerusahaan:
        return IndonesianText.dataPerusahaanContent;
      case IndonesianText.dataPersyaratan:
        return IndonesianText.dataPersyaratanContent;
      case IndonesianText.dataLabelBeras:
        return IndonesianText.dataLabelBerasContent;
      default:
        return IndonesianText.dataPermohonanContent;
    }
  }
  const [activeButton2, setActiveButton2] = useState("Data Permohonan");
  function activeButtonContent2() {
    return activeButton2 == "Data Permohonan" ? "Bagian ini akan diisi dengan teks data permohonan" : activeButton2 == "Data Perusahaan" ? "Bagian ini akan diisi dengan teks data perusahaan" : activeButton2 == "Data Persyaratan" ? "Bagian ini akan diisi dengan teks data persyaratan" : "Bagian ini akan diisi dengan teks data label beras"
  }

  return (
    <div className="App">

    <div id="website-title" style={{textAlign: 'center', padding: '1rem', background: "#e6f7ff"}}>
      <h1 style={{textAlign: 'center'}}>Mario's Prime React Training Grounds</h1>
      <h3 style={{textAlign: 'center'}}><a href='https://primereact.org/'>Click Here For Full PrimeReact Documentation</a></h3>
      <h3 style={{textAlign: 'center'}}><a href='https://www.youtube.com/playlist?list=PLg5sLLxn9GrJb4f78Kox2l__UfNP-7J7n'>Click Here For Youtube Tutorial Playlist</a></h3>
    </div>

      <div id="tables-sorting-searching-pagination" style={{textAlign: 'center', padding: '3rem'}}>
        <h2>Tables, Sorting, Seraching, Pagination</h2>
        <p><a href='https://primereact.org/datatable/'>Click Here For Documentation</a></p>
        <br/>
        {/* Hold Ctrl while clicking on the table header to apply multi-level sorting */}
        <InputText className='m-3' placeholder='Search...' onInput={(e) => setFilters({...filters, global:{value: e.target.value, matchMode: FilterMatchMode.CONTAINS}})}/>
        <DataTable value={students} sortMode="multiple" filters={filters} paginator rows={10} rowsPerPageOptions={[5,10,20,50,100]} totalRecords={55}>
          <Column field="id" header="ID" sortable/>
          <Column field="name" header="Name" sortable/>
          <Column field="age" header="Age" sortable/>
          <Column field="city" header="City" sortable/>
        </DataTable>
        <p>Tip: Hold <b>Ctrl</b> while clicking the column fields to multi-sort</p>
      </div>
      
      <div id="password-strength-checker" style={{textAlign: 'center', padding: '3rem', background: "#e6f7ff"}}>
        <h2>Password Strength Checker</h2>
        <p><a href='https://primereact.org/password/'>Click Here For Documentation</a></p>
        {/* feeback={false} --> turns off password strength meter */}
        <br/><p>Default:</p>
        <Password />
        <br/><p>Without Meter:</p>
        <Password feedback={false}/>
        <br/><p>More Details:</p>
        <Password toggleMask={true} header={header} footer={footer}
          weakLabel='easily guessable' mediumLabel='moderate security' mediumRegex='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$' strongLabel='safe code' strongRegex='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$'/>
      </div>

      <div id="calendar" style={{textAlign: 'center', padding: '3rem'}}>
        <h2>Calendar</h2>
        <p><a href='https://primereact.org/calendar/'>Click Here For Documentation</a></p>
        {/* <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"15px"}}> */}
        <br/><p>Default:</p>
          <Calendar /> {/* Default is dateFormat="mm/dd/yy" */}
          <br/><p>Modified Date Format:</p>
          <Calendar dateFormat="dd/mm/y" />
          <br/><p>Minimum and Maximum Date:</p>
          <Calendar minDate={new Date()} maxDate={new Date("12/31/2023")}/> {/* Date() = current date */}
          <br/><p>useState (Variable) On Date:</p>
          <Calendar value={date1} onChange={(event) => setDate1(event.value)}/>
          <br/><button onClick={() => date1 ? alert(date1) : alert ("Please select a date")}>Show Date</button>
          <br/><p>Range Of Dates (Select 2 Dates)</p>
          <Calendar value={dateRange} onChange={(event) => setDateRange(event.value)} selectionMode='range'/>
          <br/><p>Additional Time Selector:</p>
          <Calendar value={dateWithTime} onChange={(event) => setDateWithTime(event.value)} showTime showSeconds/>
          <br/><p>Instant Date Selector Reveal (Inline, Not Popup):</p>
          <Calendar inline value={date2} onChange={(event) => setDate2(event.value)} />
          <br/><button onClick={() => date2 ? alert(date2) : alert ("Please select a date")}>Show Date</button>
        {/* </div> */}
      </div>

      <div id="inputmask-user-input-formatting" style={{textAlign: 'center', padding: '3rem', background: "#e6f7ff"}}>
        <h2>InputMask, User Input Formatting</h2>
        <p><a href='https://primereact.org/inputmask/'>Click Here For Documentation</a></p>
        {/* This one below leads to error when clicked */}
        {/* <p>Default (Cannot be interacted with):</p>
        <InputMask value={value1} onChange={(e) => {setValue1(e.value)}}/> */}
        <br/><p>Date And Time Format (with custom slotChar, so no underscores):</p>
        <InputMask value={value2} onChange={(e) => {setValue2(e.value)}} placeholder="Enter Date and Time..." mask="99/99/9999 99:99:99" slotChar="mm/dd/yyyy hh:mm:ss"/>
        <br/><p>Phone Number Format:</p>
        <InputMask value={value3} onChange={(e) => {setValue3(e.value)}} placeholder="Enter Phone Number..." mask="+62 999-9999-9999"/>
        <br/><p>Some Letters, Then Some Numbers, Then Soome AlphaNumerics</p>
        <InputMask value={value4} onChange={(e) => {setValue4(e.value)}} placeholder="Some Stuff..." mask="aaaaa-999999-*****"/>
      </div>

      <div id="color-picker" style={{textAlign: 'center', padding: '3rem'}}>
        <h2>Color Picker</h2>
        <p><a href='https://primereact.org/colorpicker/'>Click Here For Documentation</a></p>
        <br/><p>Default: #{color1}</p>
        <ColorPicker value={color1} onChange={(event) => {setColor1(event.value)}}/>
        <br/><br/><div>
          {Object.keys(color2).map((key) => (
            <span>{key}:{color2[key]} {" "}</span>
          ))}
        </div><br/>
        <ColorPicker value={color2} onChange={(event) => {setColor2(event.value)}} format="rgb" inline/>
      </div>

      <div id="popup-dialog" style={{textAlign: 'center', padding: '3rem', background: "#e6f7ff"}}>
        <h2>Popup Dialog</h2>
        <p><a href='https://primereact.org/dialog/'>Click Here For Documentation</a></p>
        <br/><p>Default and Empty:</p>
        <Button label="Open" onClick={() => setVisible1(true)}/>
        <Dialog visible={visible1} onHide={() => setVisible1(false)}></Dialog>
        <br/><p>Cannot be Dragged or Resized (by hold-cliking bottom-right corners of modals), Click grey background = exit:</p>
        <Button label="Jellyfish" onClick={() => setVisible2(true)}/>
        <Dialog draggable={false} resizable={false} dismissableMask style={{ width: '80vw' }} visible={visible2} onHide={() => setVisible2(false)}>
          <p>Did you know that there's a species of jellyfish that is considered biologically immortal? Known as the Turritopsis dohrnii, this tiny creature is capable of reverting back to its juvenile form after reaching maturity, effectively restarting its life cycle over and over again. Scientists believe that this ability is due to the jellyfish's unique cells, which can transform into any other type of cell in the body. While this might seem like something out of science fiction, these immortal jellyfish are actually found all over the world, and are even considered a nuisance in some areas where they've become invasive.</p>
        </Dialog>
        <br/><p>Very Long (automatic scorllbar) + Icon + Maximizable:</p>
        <Button icon="pi pi-external-link" label="Ants" onClick={() => setVisible3(true)}/>
        <Dialog maximizable style={{ width: '80vw' }} header="Flamingos: &ldquo;Fun Fact&ldquo;" visible={visible3} onHide={() => setVisible3(false)}>
          <p>
            <img src="ants.png" width="500px" style={{ display: 'block', margin: 'auto' }}/>
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Did you know that some species of ants keep pets? Yes, you read that right, ants have been known to keep other insects as pets.
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One example of this is the leafcutter ants of South and Central America. These ants don't actually eat the leaves they cut, instead, they use them to cultivate a fungus which they feed on. However, the fungus is not the only thing they cultivate. Leafcutter ants also keep aphids as pets. They stroke the backs of the aphids with their antennae to stimulate the production of a sweet liquid known as honeydew. The ants then feed on the honeydew produced by the aphids.
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Another type of ant that keeps pets is the weaver ant. These ants are native to Asia and Australia and are known for their ability to weave leaves together using silk produced by their larvae. However, they also keep scale insects as pets. Similar to the aphids kept by the leafcutter ants, the weaver ants stroke the backs of the scale insects to stimulate the production of honeydew which they then feed on.
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;But ants aren't the only insects that keep pets. Some species of bees have been observed keeping small beetles known as "oil beetles" as pets. The bees will allow the beetles to live in their nests and feed on their pollen stores. In return, the beetles provide protection for the bees by secreting a foul-smelling oil that repels predators.
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And it's not just insects that keep pets either. Dolphins have been known to form strong bonds with other species such as whales, porpoises, and even humans. In some cases, dolphins have been seen carrying injured or sick animals on their backs, sometimes for days at a time, to help them to safety.
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the animal kingdom, it seems that having a pet is not just a human desire. Many species of animals form close bonds with other creatures, sometimes even going so far as to provide them with food and shelter. Whether it's ants keeping aphids for their honeydew, bees keeping oil beetles for their protection, or dolphins helping injured animals, it's clear that animals are capable of forming meaningful relationships with creatures other than their own species.
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So next time you see an ant scurrying across the ground, remember that it might just have a pet waiting for it back at the nest. And if you're lucky enough to see a dolphin swimming in the ocean, keep an eye out for any unusual companions it might have. You never know what kind of pet you might see in the animal kingdom.
          </p>
        </Dialog>
        <br/><p>Modals from different positions without modal background (so you can click on other buttons)</p>
        <Button label="Show Left & Right" onClick={() => {setVisible4(true), setVisible5(true)}}/>
        <Dialog position='left' modal={false} header="Left" style={{ width: '40vw' }} visible={visible4} onHide={() => setVisible4(false)}>
          <p>Left-handed people make up only around 10% of the world's population, making them relatively rare. Despite this, lefties have excelled in many areas, with a disproportionate number of artists, musicians, and athletes being left-handed.</p>
        </Dialog>
        <Dialog position='top-right' modal={false} header="Top-Right" style={{ width: '40vw' }} visible={visible5} onHide={() => setVisible5(false)}>
          <p>The term "right" is derived from the Old English word "riht," which meant "correct" or "just." In many cultures, the right side is associated with positive qualities, such as strength, honor, and righteousness. However, in some societies, the left side is considered lucky, and left-handedness is seen as a desirable trait.</p>
        </Dialog>
      </div>

      <div id="paginator" style={{textAlign: 'center', padding: '3rem'}}>
        <h2>Paginator (Without Table)</h2>
        <p><a href='https://primereact.org/paginator'>Click Here For Documentation</a></p><br/>
        <Paginator first={first} rows={itemsPerRow} totalRecords={furnitures.length} rowsPerPageOptions={[4,8,16]} onPageChange={(e) => {setFirst(e.first); setItemsPerRow(e.rows);}}/>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: "space-around"}}>
          {furnitures.slice(first, first + itemsPerRow).map((furniture) => (
            // <li key={furniture.id} style={{listStyleType: 'none'}}>
            //   {furniture.name} - {furniture.qty} - ${furniture.price}
            // </li>
            <div key={furniture.id} style={{border: '1px solid black', padding: '10px', marginBottom: '10px', width: '24%', borderRadius: '10px', backgroundColor: '#333', color: '#fff'}}>
              <h3><u>{furniture.name}</u></h3>
              <p className='mb-0'>Qty: {furniture.qty}</p>
              <p className='mt-0'>Price: ${furniture.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="slider-input" style={{textAlign: 'center', padding: '3rem', background: "#e6f7ff"}}>
        <h2>Slider Input</h2>
        <p><a href='https://primereact.org/slider/'>Click Here For Documentation</a></p>
        <br/><p>Default: {sliderValue1}</p>
        <Slider value={sliderValue1}  onChange={(e) => {setSliderValue1(e.value)}}/>
        <br/><p>Starts at 50, step=5 : {sliderValue2}</p>
        <Slider step={5} value={sliderValue2}  onChange={(e) => {setSliderValue2(e.value)}}/>
        <br/><p>Between values 5-10, step=0.01 : {sliderValue3}</p>
        <Slider step={0.01} min={5} max={10} value={sliderValue3}  onChange={(e) => {setSliderValue3(e.value)}}/>
        <br/><p>Range: {sliderValue4[0]} - {sliderValue4[1]}</p>
        <Slider range value={sliderValue4}  onChange={(e) => {setSliderValue4(e.value)}}/>
        <br/><p>Vertical: {sliderValue5}</p>
        <Slider style={{marginLeft: "50%"}} orientation="vertical" value={sliderValue5}  onChange={(e) => {setSliderValue5(e.value)}}/>
      </div>

      <div id="richtext-input" style={{textAlign: 'center', padding: '3rem'}}>
        <h2>RichText Input</h2>
        <p><a href='https://primereact.org/inputmask/'>Click Here For Documentation</a><br/><a href="https://quilljs.com/docs/modules/toolbar/">Or Click Here For The Related Quill Documentation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://formik.org/">Or Click Here For The Related Formik Documentation</a></p>
        <br/><p>Default (height=300px):</p>
        <Editor style={{height: "300px"}} value={richTextValue1} onChange={(e) => setRichTextValue1(e.htmlValue)}/>
        <br/><p> Modified Header:</p>
        <Editor style={{height: "300px"}} headerTemplate={renderCustomToolbarVariable} value={richTextValue2} onChange={(e) => setRichTextValue2(e.htmlValue)}/>
      </div>

      <div id="panel" style={{textAlign: 'center', padding: '3rem', background: "#e6f7ff"}}>
        <h2>Panels</h2>
        <p><a href='https://primereact.org/panel/'>Click Here For Documentation</a></p>
        <br/><p><b>Model Sederhana:</b></p>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: "space-evenly"}}>
          <Button label={IndonesianText.dataPermohonan} className={`p-button-secondary ${activeButton === IndonesianText.dataPermohonan ? "p-button-info" : ""}`} onClick={() => handleButtonClick(IndonesianText.dataPermohonan)}/>
          <Button label={IndonesianText.dataPerusahaan} className={`p-button-secondary ${activeButton === IndonesianText.dataPerusahaan ? "p-button-info" : ""}`}onClick={() => handleButtonClick(IndonesianText.dataPerusahaan)}/>
          <Button label={IndonesianText.dataPersyaratan} className={`p-button-secondary ${activeButton === IndonesianText.dataPersyaratan ? "p-button-info" : ""}`}onClick={() => handleButtonClick(IndonesianText.dataPersyaratan)}/>
          <Button label={IndonesianText.dataLabelBeras} className={`p-button-secondary ${activeButton === IndonesianText.dataLabelBeras ? "p-button-info" : ""}`} onClick={() => handleButtonClick(IndonesianText.dataLabelBeras)}/>
        </div>
        <Panel header={activeButton} className="mt-3">
          {activeButtonContent()}
        </Panel>
        <br/><p><b>Model Lebih Mirip Dengan InaTrade:</b></p>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: "space-around", background: "#3E5163", padding: "0.5rem", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem"}}>
          <Button label="Data Permohonan" style={{color: `${activeButton2 == "Data Permohonan" ? "#ffffff" : "#000000"}`, background: `${activeButton2 == "Data Permohonan" ? "#000000" : "#ffffff"}`, border: "none"}} onClick={() => setActiveButton2("Data Permohonan")}/>
          <Button label="Data Perusahaan" style={{color: `${activeButton2 == "Data Perusahaan" ? "#ffffff" : "#000000"}`, background: `${activeButton2 == "Data Perusahaan" ? "#000000" : "#ffffff"}`, border: "none"}} onClick={() => setActiveButton2("Data Perusahaan")}/>
          <Button label="Data Persyaratan" style={{color: `${activeButton2 == "Data Persyaratan" ? "#ffffff" : "#000000"}`, background: `${activeButton2 == "Data Persyaratan" ? "#000000" : "#ffffff"}`, border: "none"}} onClick={() => setActiveButton2("Data Persyaratan")}/>
          <Button label="Data Label Beras" style={{color: `${activeButton2 == "Data Label Beras" ? "#ffffff" : "#000000"}`, background: `${activeButton2 == "Data Label Beras" ? "#000000" : "#ffffff"}`, border: "none"}} onClick={() => setActiveButton2("Data Label Beras")}/>
        </div>
        <div style={{ background: "#ffffff", padding: "0.5rem",  border: "1px solid gray", borderBottomLeftRadius: "0.5rem", borderBottomRightRadius: "0.5rem"}}>
          <p>{activeButton2 == "Data Permohonan" ? "111" : activeButton2 == "Data Perusahaan" ? "222" : activeButton2 == "Data Persyaratan" ? "333" : "444"}</p>
          <p>{activeButtonContent2()}</p>
        </div>
        <br/>
        <img src="tugas4.jpg" border="1px"/>
      </div>

    </div>
  );
}

export default App;
