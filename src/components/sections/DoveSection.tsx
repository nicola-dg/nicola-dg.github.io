import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix per icone default di Leaflet
import L from "leaflet";
import Title from "../ui/title";
import Paragraph from "../ui/paragraph";
L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const DoveSection = () => {


    return (
        <section className="pb-22 flex flex-col gap-4">
            
            <div className="text-nowrap flex justify-center">
                <Title>Dove Ci troviamo</Title>
            </div>

            <div className="flex flex-col gap-4">
                <Paragraph>
                    La nostra sede è strategicamente posizionata a pochi minuti dalla <strong>zona industriale di Teverola</strong><br />
                    e vicino alla <strong>base NATO di Gricignano</strong>, garantendo un facile accesso sia per clienti privati che per aziende.<br />
                    Siamo nel cuore della zona produttiva, comodi da raggiungere e facilmente individuabili.
                </Paragraph>

                <MyMap></MyMap>
            </div>

        </section>
    );
};

export default DoveSection;



const MyMap = () => {

    const position: [number, number] = [40.988788, 14.230851];

    const customIcon = new L.Icon({
        iconUrl: "/marker-icon.svg",       // metti il file in public/
        iconSize: [35, 45],                // dimensioni standard Leaflet
        iconAnchor: [12, 41],              // punto che tocca il suolo
        popupAnchor: [1, -34],             // posizione del popup rispetto all'icona
        shadowSize: [41, 41],
    });


    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="w-full h-96 rounded-lg shadow-lg">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    Tecnall 2000 <br /> La nostra sede.
                </Popup>
            </Marker>
        </MapContainer>

    )
}
