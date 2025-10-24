const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        "waveform-playlist": "./app.js",
    },
    output: {
        path: path.resolve(__dirname, "../src/pages/composition/scripts"),   // parent folder
        filename: "waveform-playlist.umd.js",
        library: { name: "WaveformPlaylist", type: "var" },
        libraryTarget: "umd",
    },
    mode: "development",
    devtool: false,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [["@babel/plugin-transform-runtime"]],
                    },
                },
            },
        ],
    },
};