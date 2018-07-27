// @flow
import mustache from "mustache";
import fs from "fs";

export default async (options = {template: '', include: [], payload: {}}) => {
    const includePayloads = {};

    for (let i = 0; i < options.include.length; i++) {
        const key = Object.keys(options.include[i]);
        const path = options.include[i][key];
        includePayloads[key] = await loadTemplate(path, options.payload);
    }

    return await loadTemplate(options.template, {...options.payload, include: includePayloads})
};

// private
const loadTemplate = (path, dataObject) => new Promise((resolve, reject) => {
    fs.readFile(path, function (err, data) {
        if (err) return reject(err);
        const output = mustache.render(data.toString(), dataObject);
        return resolve(output)
    });
});