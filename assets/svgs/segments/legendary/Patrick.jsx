import * as React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={windowWidth}
      height={windowWidth * (39 / 90)}
      viewBox="0 0 90 39"
      {...props}
    >
      <Path fill="purple" d="M40.5 0h9v39h-9z" />
      <Path fill="#0ff" d="M0 0h40.5v39H0zM49.5 0H90v39H49.5z" />
      <G stroke="#000">
        <Path
          d="M59.342 122.653c-.84 1.313-1.257 2.858-1.454 4.404-.198 1.546-.19 3.11-.247 4.668-.107 2.9-.445 5.793-.378 8.693.088 3.73.858 7.453 2.363 10.867.46 1.045.992 2.065 1.684 2.974.692.908 1.55 1.704 2.568 2.223.412.21.86.376 1.323.378.304.001.61-.07.881-.207a6.47 6.47 0 01-.384-.284 5.899 5.899 0 01-1.303-1.436 5.847 5.847 0 01-.885-3.074c-.007-.77.129-1.536.3-2.288.488-2.132 1.268-4.183 2.052-6.224 1.332-3.461 2.685-6.915 3.97-10.394.866-2.349 1.706-4.721 2.172-7.181.177-.93.3-1.879.23-2.823-.068-.944-.339-1.89-.891-2.658a4.491 4.491 0 00-1.614-1.365 5.52 5.52 0 00-2.045-.563c-1.417-.118-2.84.256-4.137.841-1.675.757-3.213 1.901-4.205 3.45zM100.825 116.039c-1.863.555-3.347 2.018-4.347 3.685-1.82 3.034-2.212 6.684-2.55 10.205-.228 2.36-.45 4.72-.568 7.087-.112 2.236-.132 4.482.095 6.71.367 3.607 1.381 7.127 2.74 10.488.923 2.284 2.021 4.527 3.59 6.426.203.244.419.488.698.638.14.075.295.125.453.133a.797.797 0 00.456-.11.91.91 0 00.356-.46c.07-.185.097-.383.117-.58.11-1.097.017-2.203 0-3.306-.04-2.578.333-5.15.945-7.654 1.099-4.502 2.967-8.804 5.386-12.757a48.696 48.696 0 013.212-4.63c1.07-1.364 2.224-2.685 2.995-4.236.386-.776.672-1.607.78-2.467.108-.86.034-1.75-.278-2.558-.407-1.055-1.198-1.927-2.097-2.612-.9-.686-1.912-1.204-2.911-1.734-1.415-.752-2.824-1.538-4.346-2.035-1.523-.497-3.19-.69-4.726-.233z"
          fill="#784421"
          strokeWidth={0.265}
          transform="matrix(-.16365 0 0 .144 77.413 1.554)"
        />
        <Path
          d="M58.976 149.738a7.443 7.443 0 011.713-.213 6.295 6.295 0 011.713.213c.436.12.858.295 1.252.52"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(-.16365 0 0 .144 77.413 1.554)"
        />
        <Path
          d="M61.823 149.69a8.514 8.514 0 00.661 3.615c.39.924.957 1.79 1.737 2.421.543.44 1.183.759 1.861.927M94.21 148.592a66.3 66.3 0 011.985 1.04c.904.493 1.805 1.01 2.788 1.322a7.2 7.2 0 003.354.236"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(-.16365 0 0 .144 77.413 1.554)"
        />
        <Path
          d="M100.92 151.285a53.545 53.545 0 00-.237 4.158c-.018 1.057-.006 2.118.142 3.165.125.887.348 1.76.662 2.599M97.282 150.293c.061 1.064.203 2.123.425 3.165a22.664 22.664 0 001.323 4.158 24.435 24.435 0 002.031 3.803"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(-.16365 0 0 .144 77.413 1.554)"
        />
        <Path
          d="M379.19 608.273c-2.165-1.853-6.195-7.575-9.084-12.898-4.043-7.45-8.461-18.414-11.409-28.316-.59-1.986-1.023-3.662-.96-3.724.062-.063.786.242 1.608.678 1.886.999 7.535 4.055 7.62 4.123.034.027.183 1.29.33 2.807 1.024 10.557 3.963 20.476 9.085 30.662.943 1.875 2.282 4.347 2.975 5.493.694 1.146 1.179 2.083 1.078 2.083-.1 0-.66-.408-1.244-.908z"
          transform="matrix(-.0433 0 0 .0381 77.413 1.554)"
          fill="#e9c6af"
          strokeWidth={0.253}
        />
        <Path
          d="M380.325 606.186c-4.192-7.027-7.711-15.44-9.655-23.084-.788-3.096-1.766-8.472-1.988-10.918a56.148 56.148 0 00-.286-2.578l-.125-.81 1.87.852c2.692 1.226 5.67 2.113 8.299 2.471l2.288.312-.149 1.77c-.796 9.46-.816 21.28-.043 25.889.455 2.711 1.212 5.81 1.892 7.748.36 1.025.389 1.335.135 1.433-.203.078-1.03-1.062-2.238-3.085z"
          transform="matrix(-.0433 0 0 .0381 77.413 1.554)"
          fill="#e9c6af"
          strokeWidth={0.253}
        />
        <Path
          d="M383.212 606.226c-.828-2.78-1.493-6.25-1.78-9.293-.454-4.809-.285-14.484.395-22.648l.162-1.939 2.116-.08c1.164-.045 2.116-.012 2.116.073 0 .085-.118.767-.26 1.515-1.087 5.686-1.328 9.132-1.482 21.185-.168 13.213-.305 14.418-1.267 11.187zM244.034 591.787c-6.28-2.01-12.21-8.175-16.671-17.33-1.624-3.333-3.599-7.965-3.456-8.108.036-.036 1.077-.2 2.314-.364 2.014-.268 6.294-.249 6.549.03.054.06.224 1.534.377 3.276.677 7.728 3.317 13.931 7.844 18.432 1.672 1.664 2.684 2.425 4.44 3.338l2.272 1.183-1.136-.005c-.626-.003-1.765-.206-2.533-.452z"
          transform="matrix(-.0433 0 0 .0381 77.413 1.554)"
          fill="#e9c6af"
          strokeWidth={0.253}
        />
        <Path
          d="M244.191 588.851c-5.503-3.807-9.204-11.403-9.887-20.293l-.181-2.364.855.179c.47.098 1.765.537 2.876.975l2.02.796-.126 1.136c-.07.625-.115 2.841-.102 4.925.021 3.352.102 4.048.708 6.048.88 2.906 2.33 5.681 4.078 7.8.764.926 1.3 1.676 1.193 1.669-.107-.008-.752-.4-1.434-.871z"
          transform="matrix(-.0433 0 0 .0381 77.413 1.554)"
          fill="#e9c6af"
          strokeWidth={0.253}
        />
      </G>
      <G fill="#ff2a2a" stroke="#000" strokeWidth={0.05}>
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.8253 0 0 1.43139 105.116 -7.852)"
        />
        <Path d="M82.877 13.803l.363-.513.72-.314.793-.48.29-.52.198-.554-.05-.736-.38-1-1.149.248-.52.653-.249.653.017.976.173.678.05.537zM84.811 9.686l-1.57 3.604zM72.001 12.192l-.364-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.736.38-1 1.15.248.52.653.249.653-.017.976-.174.678-.05.538zM70.066 8.074l1.571 3.605z" />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(0 -.7504 -.77073 0 83.379 23.816)"
        />
        <Path d="M82.627 13.996l-.364-.513-.72-.314-.793-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.248.654-.016.975-.174.678-.05.538zM80.692 9.878l1.571 3.605zM82.48 14.18l.513.364.314.72.48.793.52.29.554.198.736-.05 1-.38-.247-1.15-.653-.52-.654-.248-.975.016-.678.174-.538.05zM86.598 16.115l-3.605-1.57z" />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(.81902 0 0 -.90443 63.968 38.318)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.06092 0 0 -1.00296 96.889 40.082)"
        />
        <G>
          <Path d="M69.967 23.442l-.364.512-.72.314-.793.48-.29.52-.198.555.05.736.38 1 1.149-.248.52-.653.249-.653-.017-.976-.173-.678-.05-.537zM68.032 27.56l1.57-3.606z" />
        </G>
        <G>
          <Path d="M69.327 23.97l.512.365.315.719.48.794.52.289.554.198.736-.05 1-.38-.248-1.149-.653-.52-.653-.249-.976.017-.678.173-.537.05zM73.444 25.906l-3.605-1.571z" />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(-1.11235 0 0 -1.20232 89.019 40.383)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(0 -1.11235 -1.20232 0 99.405 39.33)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(-1.11235 0 0 -1.20232 102.422 35.688)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(0 1.11235 -1.20232 0 99.553 .258)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(0 -1.06092 -1.00296 0 85.057 41.351)"
          />
        </G>
      </G>
      <G fill="purple">
        <Path d="M48.712 15.51l5.11.544-.409 3.85-5.687.958z" />
        <Circle
          cx={53.777}
          cy={16.007}
          r={0.002}
          stroke="#000"
          strokeWidth={0.265}
        />
        <Path d="M53.823 16.054l3.369 1.853 4.504.171 1.988.03.843-.092.45 2.284-3.897.036-5.42.03-2.247-.462.41-3.85" />
        <Path d="M64.527 18.016l1.81.236 1.74.036.855-.034.678-.198.265-.554.498-1.011.184-.647.649-2.46.795-1.192 1.356-1.432.351-.673.117.14-.21.725-.585.561-.935 1.24-.585.959-.117 1.333 2.76-2.339.514-.327.117.304-1.894 1.824 2.268-.07 2.315-1.754.609-.14.116.444-2.362 1.52 1.871-.024-.631.421-1.614-.046-.655.42-2.362.094-.795.748-.818 1.684 1.613-.07 2.105-1.24 2.035-.654h2.128l1.684-.749 1.146-.374.647-.533.943-.753.28.257-.56.749-2.55 1.73 1.627.097 1.74-.027.141.421-3.227.304-2.807-.28-1.286.14-2.221 1.193.023.187 1.427-.234 1.005.795.959.959 1.45.912 2.081.187 1.853-.766 1.3-.728-1.025 1.307-1.005.608-1.73.35 2.478 1.544-.444.445-.21-.538-4.07-1.918-2.011-1.52-.912-.14.748 1.262.468 2.526 1.24 1.73.78 1.896.365.42-.444.561-.257-.772-1.474-2.736-.046.655.077 2.563.975 2.886-.444.28-.983-2.525-.21-1.52.164-1.567-.094-.608-.608-2.9-.585-1.286-.935-.959-1.123-.093-3.648.21-.561.117-.047.538 2.086 1.372 1.75 1.387.444 1.03-1.193-1.147-2.245-.982.515 3.25-.421.352-.679-4.093-1.566-1.426-2.512.414z" />
      </G>
      <G>
        <G stroke="#000">
          <Path
            d="M140.183-3.911a2076.092 2076.092 0 01-18.308-5.613c-8.186-2.55-16.367-5.156-24.722-7.083-4.627-1.067-9.307-1.925-14.032-2.405-5.109-.519-10.284-.591-15.368.134-2.496.356-4.97.904-7.35 1.737-3.845 1.345-7.396 3.411-10.824 5.613-1.98 1.271-3.955 2.616-5.479 4.41-1.465 1.724-2.455 3.797-3.34 5.88-1.67 3.926-3.039 8.038-3.342 12.294-.356 5.009.774 10 2.138 14.833.926 3.279 1.97 6.54 3.464 9.602 1.494 3.062 3.457 5.932 6.024 8.172 3.519 3.068 7.979 4.807 11.894 7.35.638.414 1.275.856 2.005 1.069a3.53 3.53 0 002.301-.12l.19-1.086a33.978 33.978 0 01-1.347-2.41c-.525-1.037-.998-2.1-1.56-3.118-.549-.996-1.182-1.943-1.747-2.93-2.732-4.763-3.821-10.378-3.517-15.86.107-1.937.399-3.915 1.336-5.613.967-1.75 2.561-3.1 3.475-4.878.17-.332.317-.679.52-.993.203-.314.472-.6.816-.744.228-.096.481-.126.728-.106.247.02.488.089.717.184.457.189.864.48 1.295.724 1.471.833 3.194 1.11 4.884 1.184 1.69.075 3.385-.038 5.072.085 1.963.143 3.93.605 5.88.334 1.197-.166 2.337-.602 3.51-.897 1.172-.295 2.434-.444 3.572-.038.141.05.281.11.401.2.198.15.329.38.384.623.055.242.04.497-.016.74-.112.484-.379.917-.568 1.377-.426 1.033-.455 2.194-.291 3.3.164 1.106.513 2.174.825 3.248.683 2.35 1.194 4.75 1.938 7.083.67 2.099 1.531 4.16 1.804 6.347.223 1.787.031 3.65-.735 5.279-.486 1.032-1.187 1.947-1.938 2.806-.24.276-.49.55-.668.869-.083.148-.15.305-.2.467.122.136.288.231.467.268.233.047.476-.003.697-.09.22-.087.426-.209.64-.311.74-.355 1.587-.483 2.271-.936.435-.287.778-.69 1.136-1.069.866-.916 1.845-1.718 2.74-2.606.673-.667 1.3-1.388 1.785-2.203.485-.815.824-1.728.888-2.674.065-.962-.153-1.917-.268-2.873-.157-1.307-.123-2.627-.133-3.943-.012-1.36-.07-2.73.133-4.075.311-2.053 1.217-3.96 2.005-5.88.52-1.267.995-2.56 1.688-3.741s1.631-2.26 2.855-2.874a1.66 1.66 0 01.334-.134c.173-.043.355-.04.529-.003.174.036.34.103.498.185.315.164.598.385.911.553.639.344 1.377.455 2.102.478.724.023 1.45-.037 2.174-.01 1.474.053 2.909.46 4.344.802 2.105.5 4.25.863 6.414.935 1.625.054 3.251-.057 4.878-.067 1.581-.009 3.164.078 4.744 0 2.013-.099 4.029-.47 5.88-1.27a12.514 12.514 0 003.741-2.472c2.048-1.98 3.338-4.769 3.341-7.617.002-1.69-.439-3.37-1.202-4.877a12.874 12.874 0 00-2.673-3.542 13.84 13.84 0 00-2.74-2.004z"
            fill="#a05a2c"
            strokeWidth={0.265}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M144.643 8.519a6.877 6.877 0 00-.52-3.26 6.497 6.497 0 00-1.134-1.796c-.814-.909-1.877-1.553-2.929-2.173-.542-.32-1.094-.64-1.7-.803-.857-.231-1.761-.138-2.647-.095-1.164.057-2.33.025-3.496.048-1.228.023-2.458.108-3.685.047-1.756-.087-3.481-.47-5.197-.85-.721-.16-1.443-.32-2.174-.426-.907-.13-1.832-.174-2.74-.047-1.208.169-2.362.639-3.402 1.276a9.846 9.846 0 00-2.315 1.937c-.694.802-1.245 1.75-1.465 2.787-.186.883-.128 1.8 0 2.693.143.991.376 1.977.804 2.882.783 1.657 2.19 2.961 3.78 3.875.95.546 1.971.966 3.023 1.275 2.154.635 4.417.808 6.662.85 1.417.028 2.835.004 4.252.048 1.83.057 3.672.226 5.481-.047 2.064-.312 4.018-1.198 5.717-2.41 1.2-.856 2.302-1.902 2.976-3.213a6.522 6.522 0 00.71-2.598z"
            fill="#e9c6af"
            strokeWidth={0.265}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M144.596 9.558a22.347 22.347 0 00-2.079-1.464c-.871-.543-1.791-1.03-2.788-1.276-1.03-.255-2.109-.245-3.165-.142-.274.027-.548.06-.814.13-.266.07-.525.177-.745.343-.33.248-.562.629-.614 1.04-.042.327.028.66.137.973.11.312.259.61.382.916.12.295.22.608.425.85.148.174.343.303.548.404.205.1.42.175.634.258a9.02 9.02 0 013.921 2.976M115.397 14.283a5.014 5.014 0 011.087-1.56c.563-.546 1.245-.952 1.937-1.322.584-.313 1.18-.604 1.748-.945.386-.232.765-.494 1.04-.85.238-.31.391-.696.378-1.087a1.745 1.745 0 00-.226-.77c-.13-.237-.3-.45-.483-.648-.43-.464-.95-.869-1.56-1.04-.471-.131-.974-.116-1.458-.034-.483.083-.952.231-1.423.366-.71.202-1.429.374-2.126.614-1.043.359-2.033.87-2.93 1.512M132.17 8.566c.041.37-.025.752-.19 1.087-.205.42-.552.752-.92 1.04-.519.404-1.105.741-1.749.873-.534.11-1.088.073-1.63 0-.742-.1-1.484-.27-2.15-.614-.512-.265-.985-.645-1.251-1.158a2.367 2.367 0 01-.237-.755 2.08 2.08 0 01.014-.725c.05-.237.155-.465.317-.646.175-.194.408-.324.638-.449a4.62 4.62 0 01.709-.33c.567-.193 1.184-.171 1.78-.102.594.07 1.188.185 1.787.173.577-.012 1.164-.14 1.724 0 .328.082.636.259.85.52.247.298.361.702.308 1.086z"
            fill="none"
            strokeWidth={0.265}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M130.776 6.936c-.404-.465-.79-.946-1.157-1.441-.137-.185-.277-.376-.473-.496a1.238 1.238 0 00-.625-.157c-.217-.005-.434.025-.65.039-.192.012-.385.013-.575.04-.19.028-.38.084-.536.196a1.169 1.169 0 00-.287.313c-.078.12-.142.247-.209.372-.22.413-.474.808-.756 1.181"
            fill="none"
            strokeWidth={0.265}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M141.464 13.692c.466-.376 1.096-.98 1.4-1.343.59-.705 1.27-1.962 1.353-2.506.05-.325.035-.34-.76-.896-1.22-.85-2.41-1.502-3.285-1.799-1.4-.474-4.158-.429-4.907.081-.796.542-.873 1.133-.319 2.467.44 1.057.545 1.217.924 1.402.168.082.752.36 1.298.62 1.148.544 1.98 1.146 2.808 2.032.323.346.599.628.614.627.015 0 .408-.309.874-.685zM115.533 13.639c.501-.954 1.372-1.627 3.871-2.99 1.112-.606 1.403-.828 1.746-1.334.465-.684.257-1.43-.633-2.272-.783-.74-1.018-.838-2.012-.834-.739.003-1.07.068-2.523.492-1.942.566-2.808.908-3.72 1.47-.624.387-.654.42-.623.727.059.587.603 1.905 1.082 2.621.505.756 1.477 1.772 2.161 2.261l.419.3z"
            fill="#d38d5f"
            strokeWidth={0.095}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M131.982 9.72a1.475 1.475 0 00-.936-.268 1.16 1.16 0 00-.735.3c-.11.108-.195.241-.25.385a1.69 1.69 0 00-.1.585c-.004.19.013.38.05.568M126.402 11.29a2.392 2.392 0 00-.15-1.103 1.949 1.949 0 00-.318-.549 1.428 1.428 0 00-.5-.386 1.261 1.261 0 00-1.237.117"
            fill="none"
            strokeWidth={0.265}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M129.007 11.472c.306-.035.869-.196.85-.243a2.517 2.517 0 01-.026-.24c-.083-.968.336-1.58 1.143-1.669.265-.03.574.02.82.13l.105.05.042-.129c.078-.233.095-.377.095-.77 0-.398-.012-.497-.085-.688-.153-.397-.503-.691-.97-.813-.288-.076-.54-.081-1.225-.027-.59.047-.88.034-1.787-.084-.738-.095-1.002-.116-1.353-.104-.565.02-.89.112-1.453.415-.526.282-.713.44-.85.722-.088.178-.121.297-.144.517-.019.177.009.572.044.634.004.006.043-.006.086-.027a1.412 1.412 0 011.56.218c.429.373.698 1.035.698 1.714v.123l.18.045c.787.193 1.74.288 2.27.226z"
            fill="#c87137"
            strokeWidth={0.017}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M130.393 10.965c.467-.276 1.138-.855 1.29-1.114l.06-.102-.124-.052a1.212 1.212 0 00-1.02.043c-.288.156-.444.439-.485.875-.021.232.003.472.049.472.013 0 .117-.055.23-.122zM126.249 10.842c-.054-.644-.413-1.234-.883-1.451a1.122 1.122 0 00-.87-.01c-.163.072-.177.087-.157.166.085.348.581.878 1.102 1.178.194.112.749.362.802.362.015 0 .017-.11.006-.245z"
            fill="#502d16"
            strokeWidth={0.033}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M129.634 6.794c.028-.007.212-.023.41-.035l.36-.022-.101-.122c-.056-.067-.293-.37-.527-.673a11.47 11.47 0 00-.563-.689c-.251-.25-.512-.286-1.523-.213-.774.056-.91.144-1.295.835-.117.21-.27.473-.34.583-.07.11-.123.203-.12.207.005.003.083-.009.175-.028.31-.064 1.12-.04 1.82.056.579.079 1.568.137 1.704.101z"
            fill="#d38d5f"
            strokeWidth={0.033}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M140.183 9.085a1.954 1.954 0 01-.768 1.202 2.02 2.02 0 01-1.002.368 2.102 2.102 0 01-1.074-.194 2.102 2.102 0 01-.83-.708M133.936 10.989a9.476 9.476 0 01-1.77 1.17c-.486.247-.999.454-1.537.534-.84.125-1.691-.063-2.54-.067-.894-.004-1.807.194-2.672-.033-.452-.12-.869-.35-1.25-.62-.38-.272-.73-.583-1.089-.884-.316-.265-.639-.52-.969-.768M127.856 11.657l-.067.969M119.002 9.586a1.517 1.517 0 01-1.102.601 1.74 1.74 0 01-.86-.177 2.536 2.536 0 01-.71-.524 3.302 3.302 0 01-.802-1.37M119.37 4.274a1.85 1.85 0 01-1.971.334M139.248 5.877l-.835-.768M100.628 38.4a3.098 3.098 0 00-1.22-.684c-.544-.158-1.122-.164-1.687-.117a9.475 9.475 0 00-4.06 1.303M60.67 42.226c-.092.417-.29.811-.567 1.136-.313.366-.724.64-1.162.84-.439.2-.907.326-1.377.43-1.5.328-3.05.423-4.577.267a14.158 14.158 0 01-3.274-.735M65.244 51.962a2726.5 2726.5 0 01-5.943-7.865M63.945 52.249a73.226 73.226 0 00-2.472-1.971c-1.347-1.027-2.75-2.027-3.776-3.375a8.39 8.39 0 01-1.102-1.937M58.7 49.676A33.425 33.425 0 0153.655 45"
            fill="none"
            strokeWidth={0.265}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M99.325 37.616a13.126 13.126 0 01-1.537 4.176c-.752 1.302-1.722 2.466-2.773 3.541a28.775 28.775 0 01-2.706 2.439M90.004 48.14a8.775 8.775 0 002.171-1.671 9.867 9.867 0 001.838-2.806c.582-1.32.905-2.738 1.236-4.143.12-.513.243-1.025.367-1.537"
            fill="none"
            strokeWidth={0.265}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M93.43 47.239c.577-.252.806-.431 1.552-1.212a47.707 47.707 0 011.616-1.565 53.98 53.98 0 001.503-1.44c1.39-1.432 2.157-2.813 2.343-4.213.047-.357.051-.348-.25-.552-.214-.146-.654-.36-.738-.36-.029 0-.052.026-.052.059 0 .032-.053.265-.117.517-.56 2.207-1.562 4.038-3.302 6.039-.44.506-1.834 1.895-2.36 2.352-.552.479-.562.488-.501.487.027 0 .165-.05.306-.112z"
            fill="#e9c6af"
            strokeWidth={0.033}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M90.918 48.236c.101-.028.402-.155.668-.284.267-.128.501-.233.521-.233.02 0 .088-.043.15-.096l.532-.441c1.155-.957 2.491-2.285 3.393-3.372 1.448-1.745 2.394-3.599 2.871-5.625.047-.2.081-.369.075-.375a2.118 2.118 0 00-.26-.05c-.313-.048-1.258-.02-1.713.052-.519.083-1.358.28-1.417.333-.004.003-.165.665-.359 1.471a84.31 84.31 0 01-.504 2.015c-.632 2.27-1.455 3.787-2.77 5.104A8.891 8.891 0 0190.538 48l-.263.164.086.045c.136.071.356.082.557.027z"
            fill="#e9c6af"
            strokeWidth={0.033}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M90.687 47.537c.957-.65 1.887-1.638 2.524-2.678.6-.98 1.057-2.105 1.45-3.571.154-.577.732-3.003.718-3.017-.026-.026-.732.28-1.17.506l-.468.242.017.366c.08 1.775-.159 3.2-.767 4.566-.397.89-.996 1.775-1.975 2.916-.387.452-.685.845-.66.87.009.008.157-.082.33-.2z"
            fill="#e9c6af"
            strokeWidth={0.033}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M65.205 51.123c0-.143-.196-.6-.435-1.016-.238-.416-.858-1.607-1.377-2.646a61.337 61.337 0 00-1.807-3.333l-.863-1.443-.16.314c-.09.172-.356.493-.594.712l-.432.399 2.75 3.636c1.513 2 2.789 3.636 2.835 3.636.046 0 .083-.116.083-.26zM64.544 51.982c.078-.026.196-.065.263-.085.094-.03-3.45-4.848-5.367-7.296l-.238-.304-.471.178c-.259.097-.797.25-1.195.337l-.725.16.11.26c.585 1.37 1.854 2.753 4.127 4.494.805.617 1.793 1.391 2.194 1.72.694.57.921.663 1.302.536z"
            fill="#e9c6af"
            strokeWidth={0.095}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
          <Path
            d="M63.221 51.913c0-.02-.797-.654-1.772-1.408-3.11-2.408-3.92-3.24-4.743-4.876l-.304-.603-.573.06c-.315.033-.853.06-1.195.06h-.623l1.085 1.097c1.124 1.137 2.821 2.646 3.46 3.076.866.585 3.708 2.292 4.082 2.454.397.17.583.216.583.14zM54.98 46.659l-1.504-1.512-1.01-.147a18.525 18.525 0 01-1.373-.243c-.2-.053-.38-.08-.401-.059-.107.107 5.45 3.472 5.732 3.472.034 0-.616-.68-1.443-1.511z"
            fill="#e9c6af"
            strokeWidth={0.095}
            transform="matrix(.17374 0 0 .18502 48.244 15.715)"
          />
        </G>
      </G>
      <G fill="#d40000" stroke="#000" strokeWidth={0.05}>
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.1418 0 0 .63765 94.217 4.421)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.19349 0 0 .64745 92.12 13.911)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(1.1418 0 0 .63765 62.828 12.224)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(1.1418 0 0 .63765 61.969 6.663)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.1418 0 0 .63765 97.655 4.489)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.10687 0 0 1.19144 102.806 1.087)"
        />
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(1.05083 0 0 .95402 65.488 7.571)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(.60256 0 0 -.57576 67.717 34.005)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(.81902 0 0 -.90443 63.474 42.033)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(0 .81902 -.90443 0 90.099 12.838)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(0 -.81902 .90443 0 57.995 38.136)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
