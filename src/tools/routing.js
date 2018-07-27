// @flow
export default (controller, errorHandler) => async (req, res) => {
    try {
        res.send(await controller(req, res))
    } catch (error) {
        res.status(error.status || 500);
        res.send(await errorHandler(req, res, error))
    }
};
