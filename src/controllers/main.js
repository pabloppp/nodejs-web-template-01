// @flow

import templating from "../tools/templating";

export default async (req, res) => {
    // data fetch block
    // here is where you do all the database queries etc...
    const name = req.query.name || "World";

    // rendering block
    const payload = {name};
    const template = "public/views/main.mustache";
    const include = [{footer: "public/views/footer.mustache"}];

    return await templating({template, include, payload});
}