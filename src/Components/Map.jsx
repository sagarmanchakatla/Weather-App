import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://gist.githubusercontent.com/mbostock/4090846/raw/world-110m.json";

export default function Map({ data }) {
  return (
    <div className="max-w-lg mx-auto w-full sm:w-[500px] mt-4">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#D6D6DA",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {data && (
          <Marker coordinates={[data.location.lon, data.location.lat]}>
            <circle r={10} fill="#F53" />
            <text
              textAnchor="middle"
              y={-20}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {data.location.name}
            </text>
          </Marker>
        )}
      </ComposableMap>
    </div>
  );
}
