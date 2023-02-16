const api = require("asposeslidescloud");
const fs = require('fs');
const pdf2img = require('pdf-img-convert');
const slidesApi = new api.SlidesApi("b2b27f66-c0c5-4f71-ab6f-1b9addfa3f5b", "6aae89c3ba25e02a568462cde7773822");


export function convertFiles(path, fileName) {
    slidesApi.convert(fs.createReadStream(path + fileName), 'pdf').then((response) => {
        fs.writeFile(path + fileName.substring(0, fileName.length - 5) + ".pdf", response.body, (err) => {
            if (err) throw err;
            fs.unlink(path + fileName, () => {

            });
            pdf2img.convert(path + fileName.substring(0, fileName.length - 5) + ".pdf").then(function (outputImages) {
                for (let i = 0; i < outputImages.length; i++)
                    fs.writeFile(path + (i + 1) + ".png", outputImages[i], function (error) {
                        if (error) {
                            console.error("Error: " + error);
                        }
                    });
            });
            fs.unlink(path + fileName.substring(0, fileName.length - 5) + ".pdf", () => {

            });
        });
    });
}




