import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix per icone default di Leaflet
import L from "leaflet";
L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const DoveSection = () => {
    const position: [number, number] = [40.988788, 14.230851];

    const customIcon = new L.Icon({
        iconUrl: "/marker-icon.svg",       // metti il file in public/
        iconSize: [35, 45],                // dimensioni standard Leaflet
        iconAnchor: [12, 41],              // punto che tocca il suolo
        popupAnchor: [1, -34],             // posizione del popup rispetto all'icona
        shadowSize: [41, 41],
    });

    return (
        <section className="pb-22 flex flex-col items-center">
            <h1 className="text-6xl font-bold mb-8">Dove Ci troviamo</h1>

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
        </section>
    );
};

export default DoveSection;
